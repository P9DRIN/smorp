import { ReactNode, createContext } from "react";


interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext()


export function AuthProvider({children}: AuthProviderProps){

    return (

        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>

    )
}