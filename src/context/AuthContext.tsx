import {  ReactNode, createContext, useEffect, useState} from "react";
import { AccountInputProps, AccountProps, LoginInputProps, LoginProps, editAccountProps } from "../@types/account";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";


interface AuthProviderProps {
    children: ReactNode
}
export interface AuthContextType {
    Authenticated: boolean
    registerAccount: (data: AccountInputProps) => Promise<void>
    loginAccount: (data: LoginProps) => Promise<void>
    logoutAccount: () => void
    handleError: boolean
    user: LoginInputProps | undefined
    loading: boolean
    info: AccountProps | undefined
    editAccount: (data: editAccountProps) => Promise<void>
    getUserInfo: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthProviderProps){

    const navigate = useNavigate()
    const [user, setUser] = useState<LoginInputProps>()
    const [handleError, setHandleError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [info, setInfo] = useState<AccountProps>()
    
    async function getUserInfo(){
        const emailFromLocal = localStorage.getItem('user')

        if(emailFromLocal){
            const recoveredUser = JSON.parse(emailFromLocal)
            const response = await api.get(`acc/${recoveredUser.email}`)
            setInfo(response.data.account[0])
        }
    }

    useEffect(() => {
        const emailFromLocal = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if(emailFromLocal && token){
        const recoveredUser = JSON.parse(emailFromLocal)
        setUser(recoveredUser)
        api.defaults.headers.Authorization = `Bearer ${token}`
        }
        setLoading(false)

        getUserInfo()
    }, [])

    async function loginAccount(data: LoginProps){
        
        const { email, password } = data

        const searchAccount = await api.get(`/acc/${email}`)

        if(searchAccount.data.account.length == 1){
            try{
                const response = await fetch('https://api-smorp.vercel.app/sessions', {
                    method: "POST",
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    })
                })

                if(!response.ok){
                    setHandleError(true)
                    throw new Error('Cannot find data. Try again!')
                } 

                const data = await response.json()
                setHandleError(false)
                
                const loggedUser = data.user
                const token = data.token
                console.log(loggedUser)

                localStorage.setItem('user', JSON.stringify(loggedUser))
                localStorage.setItem('token', token)

                api.defaults.headers.Authorization = `Bearer ${token}`
                setUser(loggedUser)
                navigate('/')
            }catch(error){
                console.error(error)
            }} 
            else{
                setHandleError(true)
            }
    }

    async function registerAccount(data: AccountInputProps){

        const { email, password, fullName, street, houseNumber, zipCode, city, federalUnit } = data

        const address = [ { street, houseNumber, zipCode, city, federalUnit }]

        await api.post('/acc', {
            email,
            password,
            fullName,
            address,
            createdAt: new Date().toISOString(),
        })
    }

    async function editAccount(data: editAccountProps){

        const { street, houseNumber, zipCode, city, federalUnit } = data

        const getUser = localStorage.getItem('user') || ''
        const email = JSON.parse(getUser)

        await api.put(`/acc/${email.email}`,{
            email: email.email,
            address: {
                street: street,
                houseNumber: houseNumber,
                zipCode: zipCode,
                city: city,
                federalUnit: federalUnit,
            }
        })

    }

    function logoutAccount() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = null;
        setUser(undefined)
    }

    return (

        <AuthContext.Provider value={{

            Authenticated: !!user,
            registerAccount,
            loginAccount,
            logoutAccount,
            handleError,
            user,
            loading,
            info,
            editAccount,
            getUserInfo,
                                    }}>
            {children}
        </AuthContext.Provider>

    )
}