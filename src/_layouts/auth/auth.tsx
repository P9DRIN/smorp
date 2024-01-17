import { Bag, SignIn } from "phosphor-react";
import { CounterBG, Container, FormContainer, Wrapper, InputEmail, InputPassword, ButtonSubmit } from "./style";
import { Link } from "react-router-dom";


export function Auth(){



    return(
    <>
    <Container>
    <CounterBG/>
            <FormContainer>
                <h1>Welc<Bag/>me back!</h1>
                <Wrapper>
                <InputEmail type="email" placeholder="Login" />
                <InputPassword type="password" placeholder="Password"/>
                <ButtonSubmit><SignIn size={28}/></ButtonSubmit>
                </Wrapper>
                <span>register <Link to="/register" className="link">here</Link></span>
            </FormContainer>
    </Container>
    </>
    )
}