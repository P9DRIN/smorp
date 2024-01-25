import styled from 'styled-components'


export const Container = styled.div`


    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 100vh;


`

export const Form = styled.form`

   
        display: flex;
        align-items: center; 
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    

   

    & .back{
        margin-top: -0.2rem;
    }
    & .link{
        color: ${props => props.theme['blue']};
        text-decoration: underline;
    }

`
export const RegisterTag = styled.span`
    color: ${props => props.theme['white-soft']} !important;
    
    & h2{
        color: ${props => props.theme['white']}
    }
`

const defaultInput = styled.input`
   
    background: none;
    border: 1px solid ${props => props.theme['white']};
    color: ${props => props.theme['white']};

    @media (max-width: 425px){
        width: 80vw;
        height: 4vh;
        padding: 1rem;
    }
    @media (min-width: 768px){
        width: 60vw;
        height: 4vh;
        padding: 1rem;
    }
    @media (min-width: 1024px){
        width: 40vw;
        height: 5vh;
        padding: 1rem;
    }
`


export const InputEmail = styled(defaultInput)`

`
export const InputPassword  = styled(defaultInput)`

`
export const InputStreet  = styled(defaultInput)`

`
export const InputHouseNumber = styled(defaultInput)`

`
export const InputZipCode = styled(defaultInput)`

`
export const InputFU = styled(defaultInput)`

`
export const InputName = styled(defaultInput)``

export const SubmitButton = styled.button`
  
    color: white;
    background: ${props => props.theme['blue']};
    border: none;
    transition: 0.2s ease-in-out;
    margin-top: 2rem;

   width: 100%;



    &:hover{
        opacity: 80%;
        cursor: pointer;
    }
`