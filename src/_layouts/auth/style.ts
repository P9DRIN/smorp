import styled from 'styled-components'


export const CounterBG = styled.div`
background: ${props => props.theme['rich-black']};
    height: 100vh;
    width: 20vw;
`

export const Container = styled.div`
    height: 100vh;
    display: flex;
`

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    & h1{
        display: flex;
        align-items: center;

        & svg{
            color: ${props => props.theme['blue']}
        }
    }

    & span{
        margin-top: -1.5rem;
        font-size: 1rem;
        
    }
    & .link{
        color: ${props => props.theme['blue']};
        text-decoration: underline;
    }
    
`
export const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 21rem;
    padding: 2rem;

`

export const InputEmail = styled.input`
   height: 2rem;
   background: none;
   border: 1px solid ${props => props.theme['white']};
   color: ${props => props.theme['white']};
   padding: 5px;
`

export const InputPassword = styled.input`
    height: 2rem;
    background: none;
    border: 1px solid ${props => props.theme['white']};
    color: ${props => props.theme['white']};
    padding: 5px;
`

export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    color: ${props => props.theme['rich-black']}; 
    background: ${props => props.theme['blue']};
    border: none;
    transition: 0.15s ease-in-out;
    cursor: pointer;

    &:hover{
        opacity: 60%;
    }
`
