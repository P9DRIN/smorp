import { CircleNotch } from "phosphor-react";
import { Container } from "./style";


export function Loading(){
    return(
        <>
        <Container>
            <CircleNotch size={64}/>
        </Container>
        </>
    )
}