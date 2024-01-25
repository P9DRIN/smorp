import styled from "styled-components";


export const Container = styled.div`
    border-radius: 8px;
    background: #142430;
  
    @media(max-width: 425px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 15rem;
        width: 15rem;
        margin: 1rem;

        & img{
            width: 10rem;
        }
    }

    @media(min-width: 768px){
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        
        height: 21rem;
        width: 16rem;
        margin: 1rem;

        & img{
            width: 14rem;
            margin-top: 0.5rem;
        }
    }

    & img{
        border-radius: 12px;
    }
`

export const Price = styled.h3`
    font-weight: 400;
    
    @media(max-width: 425px){
        margin-top: 0.5rem;
    }
    @media(min-width: 768px){
        margin-top: 0.5rem;
    }

`

export const BuyButton = styled.button`
   
    background: #0D1821;
    border-radius: 6px;
    outline: 0;
    border: none;
    color: ${props => props.theme['white-100']};
    cursor: pointer;
   
    transition: 0.1s ease-in-out;
   
    &:hover{
        opacity: 80%;
    }


    @media(max-width: 425px){
        margin-top: 0.5rem;
        width: 80%;
    }
    @media(min-width: 768px){
        margin-top: 0.5rem;
        width: 90%;
       
    }

`
