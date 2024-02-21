import { Bag, SignIn } from "phosphor-react";
import { CounterBG, Container, FormContainer, Wrapper, InputEmail, InputPassword, ButtonSubmit } from "./style";
import { Link } from "react-router-dom";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

type loginFormSchemaInputs = z.infer<typeof loginFormSchema>

export function Auth(){

    
    const { loginAccount, handleError } = useContext(AuthContext)

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<loginFormSchemaInputs>({
        resolver: zodResolver(loginFormSchema)
    })

    function handleLogin(data: loginFormSchemaInputs){
        loginAccount(data)
    }

    return(
    <>
    <Container>
    <CounterBG/>
            <FormContainer action="" onSubmit={handleSubmit(handleLogin)}>
                <h1>Welc<Bag/>me back!</h1>
                <Wrapper>

                <InputEmail
                 type="email" placeholder="Email" 
                 {...register('email')}
                 required
                 />

                <InputPassword 
                type="password" placeholder="Password"
                {...register('password')}
                required
                />

                <ButtonSubmit type="submit" disabled={isSubmitting}>
                    <SignIn size={28}/>
                </ButtonSubmit>
                </Wrapper>

                {  
                    handleError?
                    <span>Email ou senha incorretos. Tente Novamente.</span>
                    :
                    <></>
                }

                <span>Registre-se <Link to="/register" className="link">aqui</Link></span>
            </FormContainer>
    </Container>
    </>
    )
}