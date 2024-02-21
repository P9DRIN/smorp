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

    @media(min-width:426px) and (max-width: 767px){
       font-size: 1.45rem;
}
    @media(min-width:768px){
        font-size: 1.75rem;
        margin-top: 1.5rem
    }
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
    align-items: center;
    gap: 0.5rem;


    & span{
        color: ${props => props.theme['gray']};
        font-weight: bold;
    }

    & .address{
        text-align: center;
        display: flex;
        flex-direction: column;
        color: white !important;


    @media(min-width:426px) and (max-width: 767px){
        font-size: 1.25rem;
}
    @media(min-width:768px){
        font-size: 1.35rem;
        margin-top: 1.7rem;
    }
}
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

        
    @media(min-width:768px){
    margin-top: 1rem;
    }

        &:hover{
           background: ${props => props.theme['blue']};
           border: 1px solid ${props => props.theme['blue']};
        }

    @media(min-width:426px) and (max-width: 767px){
       height: 6vh;
       width: 80vw;
}
    @media(min-width:768px){
        width: 50vw;
        height: 7vh;
    }
    }
   
`

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;


    @media(min-width:426px) and (max-width: 767px){
 
}
    @media(min-width:768px){
        gap: 1rem;
        font-size: 1.2rem;
    }

    
    
    & div{
        display: flex;
        flex-direction: row-reverse;
        gap: .5rem;
        align-items: center;
        width:  100%;

    @media(min-width:426px) and (max-width: 767px){
     
}
    @media(min-width:768px){
        width: 20rem;
    }
    }


    & .price{
        display: flex;
        flex-wrap: wrap;
    }

`