import styled from 'styled-components'


export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 25rem;
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
    height: 2rem;
    width: 22rem;
    padding: 5px;
    background: none;
    border: 1px solid ${props => props.theme['white']};
    color: ${props => props.theme['white']};
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
    height: 3rem;
    width: 22rem;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${props => props.theme['blue']};
    border: none;
    transition: 0.2s ease-in-out;
    margin-top: 2rem;

    &:hover{
        opacity: 80%;
        cursor: pointer;
    }
`