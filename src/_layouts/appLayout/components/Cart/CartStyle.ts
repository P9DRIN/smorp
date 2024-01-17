import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;

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
    font-size: 20px;
    display: flex;
    padding: 0.01rem 0.30rem;
    margin-left: -0.5rem;

    color: ${props => props.theme['white']};

   &:hover{
    color: ${props => props.theme['blue']};
    background: ${props => props.theme['white']};
   }
    
`