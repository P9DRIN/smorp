import { PaperPlaneTilt } from "phosphor-react";
import { Container, Form, InputEmail, InputPassword, InputName, InputStreet, InputCity, InputHouseNumber, InputZipCode, InputFU, SubmitButton, RegisterTag } from "./style";
import { Link } from "react-router-dom";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newAccountFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    fullName: z.string(),
    street: z.string(),
    houseNumber: z.string().max(6, { message: "O número da casa precisa ter, no máximo, 6 digitos" }),
    zipCode: z.string().max(8, { message: "O CEP deve ter 8 digitos" }),
    city: z.string(),
    federalUnit: z.string().max(2, { message: "A sigla do estado deve ter dois caracteres" }),
})

type newAccountFormInput = z.infer<typeof newAccountFormSchema>

export function Register(){

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<newAccountFormInput>({
        resolver: zodResolver(newAccountFormSchema)
    })

    function handleRegister(data: newAccountFormInput){
        console.log(data.fullName)
        reset()
    }

    return(
        <>
        <Container>

            <Form action="" onSubmit={handleSubmit(handleRegister)}>
                <RegisterTag>New <h2>Account</h2></RegisterTag>

                <InputEmail 
                type="email" placeholder="Email"
                {...register('email')}
                />

                <InputPassword 
                type="password" placeholder="Password"
                {...register('password')}
                />

                <InputName 
                type="text" placeholder="Full Name"
                {...register('fullName')}
                />

                <InputStreet 
                type="text" placeholder="Street"
                {...register('street')}
                />

                <InputHouseNumber 
                type="text" placeholder="House Number"
                {...register('houseNumber')}
                />

                <InputZipCode
                 type="text" placeholder="ZipCode"
                 {...register('zipCode')}
                 />

                <InputCity
                 type="text" placeholder="City"
                 {...register('city')}
                 />

                <InputFU
                 type="text" placeholder="Federal Unit"
                 {...register('federalUnit')}
                 />

                {errors.houseNumber  || errors.zipCode || errors.federalUnit ? (
                <span>{errors.houseNumber?.message || errors.zipCode?.message || errors.federalUnit?.message}</span>
            )
                : null
        }
            <SubmitButton type="submit" disabled={isSubmitting}><PaperPlaneTilt size={32}/></SubmitButton>
            <span className="back">back to <Link to="/auth" className="link">login</Link></span>
            </Form>

        </Container>
        </>
    )
}