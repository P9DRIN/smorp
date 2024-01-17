import styled from "styled-components";


export const Container = styled.div`
    border-radius: 8px;
    width: 22rem;
    height: 26rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #142430;
    padding: 0.5rem ;

    & img{
        width: 16rem;
        height: 17rem;
        margin-top: 1rem;
        border-radius: 12px;
    }
`

export const Price = styled.h3`
    font-size: 24px;
    margin-top: 1.5rem;
    margin-bottom: 0.3rem;
    font-weight: 400;
`

export const BuyButton = styled.button`
    width: 80%;
    background: #0D1821;
    border-radius: 6px;
    outline: 0;
    border: none;
    color: ${props => props.theme['white-100']};
    cursor: pointer;
    padding: 0.25rem;
    transition: 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        opacity: 80%;
    }
`
