import styled from 'styled-components'


export const CounterBG = styled.div`
background: ${props => props.theme['rich-black']};

@media(max-width:425px){
    display: none;
}
@media(min-width:426px) and (max-width: 767px){
    width: 10rem;
    height: 100%;
}
@media(min-width:768px){
    width: 15rem;
    height: 100%;
}
`

export const Container = styled.div`


@media (max-width: 425px){

    display: flex;
    flex-direction: column;
    height: 100vh;
   

}
@media(min-width:426px) and (max-width: 767px){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

@media(min-width:768px){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
`

export const FormContainer = styled.form`
background: ${props => props.theme['black']};

 @media (max-width: 425px){

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;


}
@media(min-width:426px) and (max-width: 767px){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    width: 90%;
}

@media(min-width:768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
}

    & h1{
        display: flex;
        align-items: center;
        & svg{
            color: ${props => props.theme['blue']}
        }
    }

    & span{
        
    }
    & .link{
        color: ${props => props.theme['blue']};
        text-decoration: underline;
    }
    
`
export const Wrapper = styled.div`
    
    @media (max-width: 425px){

    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    padding: 1rem;

}
@media(min-width:426px) and (max-width: 767px){
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}
@media(min-width:768px){    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    
}
`
export const InputEmail = styled.input`

   background: none;
   border: 1px solid ${props => props.theme['white']};
   color: ${props => props.theme['white']};
   padding: 5%;

   @media(min-width:426px) and (max-width: 767px){
    padding: 3%;
    
   }

   @media(min-width:768px){
    padding: 2%;
    width: 45%;

}

`

export const InputPassword = styled.input`

    background: none;
    border: 1px solid ${props => props.theme['white']};
    color: ${props => props.theme['white']};
    padding: 5%;

    @media(min-width:768px){
    padding: 2%;
    width: 45%;

}
@media(min-width:426px) and (max-width: 767px){
    padding: 3%;
}

`

export const ButtonSubmit = styled.button`
 
    height: 2.5rem;
    color: ${props => props.theme['rich-black']}; 
    background: ${props => props.theme['blue']};
    border: none;
    transition: 0.15s ease-in-out;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        opacity: 60%;
    }

    @media(min-width:426px) and (max-width: 767px){
        width: 15rem;
    }

    @media(min-width:768px){
        width: 15rem;
    
}

`
