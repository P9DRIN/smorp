import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    


    & .welcome{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.15rem;
    }

    & h1{
        font-size: 1rem;
        color: ${props => props.theme['gray']};
        
    }
`

export const Header = styled.header`

    height: 5rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & span{
        color: ${props => props.theme['blue']};
        font-weight: bolder;
    }


`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const PaymentForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 2.5rem;
    gap: 5px;
    flex-wrap: wrap;

    & button {
        width: 90%;
        height: 5vh;
        border: 1px solid ${props => props.theme['blue']};
        background: none;
        color: ${props => props.theme['white']};
        border-radius: 6px;

        &:hover{
           background: ${props => props.theme['blue']};
           border: 1px solid ${props => props.theme['blue']};
        }
    }
   
`

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    
    
    & div{
        display: flex;
        flex-direction: row-reverse;
        gap: .5rem;
        align-items: center;
        width:  100%;
    }

    & .price{
        display: flex;
        flex-wrap: wrap;
    }

`