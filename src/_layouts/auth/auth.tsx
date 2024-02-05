import { Bag, SignIn } from "phosphor-react";
import { CounterBG, Container, FormContainer, Wrapper, InputEmail, InputPassword, ButtonSubmit } from "./style";
import { Link, useNavigate } from "react-router-dom";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

type loginFormSchemaInputs = z.infer<typeof loginFormSchema>

export function Auth(){

    const navigate = useNavigate()

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<loginFormSchemaInputs>({
        resolver: zodResolver(loginFormSchema)
    })

    function handleLogin(data: loginFormSchemaInputs){
        console.log(data.email)
        console.log(data.password)
        reset()
        navigate('/')

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
                <span>register <Link to="/register" className="link">here</Link></span>
            </FormContainer>
    </Container>
    </>
    )
}