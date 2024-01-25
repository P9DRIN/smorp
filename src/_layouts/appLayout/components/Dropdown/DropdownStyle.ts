import styled from 'styled-components'


export const Button = styled.button`
    all: unset;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.25s ease-in-out;


    color: ${props => props.theme['blue-100']};

    &:hover{
        color: ${props => props.theme['blue-200']};
    }

    

    
`