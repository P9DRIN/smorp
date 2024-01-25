import styled from 'styled-components'


export const Wrapper = styled.div`
    border: 1px solid ${props => props.theme['white-soft']};
    
    @media (max-width: 425px){
        display: flex;
        justify-content: space-between;
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
    @media(min-width:768px){
        width: 8rem;
        height: 8rem;
    }
    
`
export const PriceWrapper = styled.div`
    
    @media (max-width: 425px){
        display: flex;
        align-items: center;
        gap: 1rem;
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
    
`