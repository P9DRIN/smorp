import { PaperPlaneTilt } from "phosphor-react";
import { Container, Form, InputEmail, InputPassword, InputName, InputStreet, InputHouseNumber, InputZipCode, InputFU, SubmitButton, RegisterTag } from "./style";
import { Link } from "react-router-dom";

export function Register(){
    return(
        <>
        <Container>

            <Form>
                <RegisterTag>New <h2>Account</h2></RegisterTag>
                <InputEmail type="email" placeholder="Email"/>
                <InputPassword type="password" placeholder="Password"/>
                <InputName type="text" placeholder="Full Name"/>
                <InputStreet type="text" placeholder="Street"/>
                <InputHouseNumber type="number" placeholder="House Number"/>
                <InputZipCode type="number" placeholder="ZipCode"/>
                <InputFU type="text" placeholder="Federal Unit"/>

            <SubmitButton type="submit"><PaperPlaneTilt size={32}/></SubmitButton>
            <span className="back">back to <Link to="/auth" className="link">login</Link></span>
            </Form>

        </Container>
        </>
    )
}