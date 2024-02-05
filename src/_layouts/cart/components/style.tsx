import styled from 'styled-components'


export const Wrapper = styled.div`
    border: 1px solid ${props => props.theme['white-soft']};
    
    @media (max-width: 425px){
        display: flex;
        justify-content: space-between;
    }
    @media(min-width:426px) and (max-width: 767px){
        display: flex;
        justify-content: space-between;
        width: 90%;
}
    @media(min-width:768px){
        display: flex;
        justify-content: space-between;
       
        width: 90%;
    }
    

`

export const Image = styled.img`

    @media(max-width: 425px){
        width: 5rem;
    }
    @media(min-width:426px) and (max-width: 767px){
        width: 8rem;
}
    @media(min-width:768px){
        width: 12rem;
       
    }
    
`
export const PriceWrapper = styled.div`
    
    @media (max-width: 425px){
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    @media(min-width:426px) and (max-width: 767px){
        display: flex;
        align-items: center;
        gap: 2rem;
}
    @media(min-width:768px){
        display: flex;
        align-items: center;
        gap: 2rem;
    }

`
export const Price = styled.span`
  
`

export const RemoveButton = styled.button`
    
    background: none;
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    

    color: ${props => props.theme['red']};

    &:hover{
        opacity: 80%;
    }
    
`



export const Container = styled.div`
        height: 60rem;
        display: flex;
        align-items: center;
        justify-content: center;

        & svg{
            color: ${props => props.theme['blue']};
            font-size: 14rem;
            animation: filler linear 2s infinite;
            animation-fill-mode: forwards;
        }

        @keyframes filler {
            from {
                color: ${props => props.theme['blue-300']};
     
            }
            to {
                color: ${props => props.theme['blue']};
               
                
            }
        }
`