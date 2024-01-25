import styled from "styled-components";

export const Wrapper = styled.div`

    & svg{
        color: ${props => props.theme['white']};
        transition: 0.2s ease-in-out;

        &:hover{
            color:${props => props.theme['blue']};
        }
    }
`
export const Quantity = styled.span`
    border-radius: 100%;
    background: ${props => props.theme['blue']};
    padding: 0.15rem 0.3rem;

    color: ${props => props.theme['white']};

   &:hover{
    color: ${props => props.theme['blue']};
    background: ${props => props.theme['white']};
   }
    
`