import styled from 'styled-components'


export const Container = styled.div`
   
   @media(max-width: 425px){
        display: flex;
        flex-direction: column;
        
   }
   @media(min-width:426px) and (max-width: 767px){
    display: flex;
    flex-direction: column;
}
   @media(min-width:768px){
        display: flex;
        flex-direction: column;
    
}
`

export const Header = styled.header`
    background: #111e29;
    font-weight: bold;
    
    @media(max-width: 425px){
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;  
   }
   @media(min-width:426px) and (max-width: 767px){
        display: flex;
        padding: 2rem;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
}
   @media(min-width:768px){
        display: flex;
        padding: 2rem;
        justify-content: space-between; 
        align-items: center;
    }
    & .link{
        color: ${props => props.theme['white']};
    }
`
export const Main = styled.main`
   
    --sb-track-color: #051923;
    --sb-thumb-color: #0582ca;
    --sb-size: 10px;

    scrollbar-color:
    var(--sb-thumb-color) 
    var(--sb-track-color);
    

    &::-webkit-scrollbar{
        width: 8px;

    }
    &::-webkit-scrollbar-track{
        background: #232E33;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 8px;
}

@media(max-width: 425px){
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 80vh;
        min-height: 5rem;
   }
   @media(min-width:768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        max-height: 76vh;
    
}
@media(min-width:426px) and (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        max-height: 74vh;
        width: 95vw;
}
`

export const PriceWrapper = styled.main`


    background: ${props => props.theme['rich-black']};
    padding: 1rem 8rem;
    border-radius: 6px;

    & div{
        color: ${props => props.theme['white-soft']};
    }
    & span{
        color: ${props => props.theme['white']};
    }
    

    @media(max-width: 425px){
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

    }
    @media(min-width:426px) and (max-width: 767px){
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: flex-end;
}
    @media(min-width:768px){
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: flex-end;
}   
`
export const Logo = styled.div`
    
    display: flex;
    align-items: center;
    color: ${props => props.theme['blue']};
    
    @media(min-width:426px) and (max-width: 767px){
        font-size: 1.5rem;
}

    @media(min-width:768px){
    font-size: 2rem;
}

`

export const BuyButton = styled.button`
  
    color: ${props => props.theme['white']};
    background: ${props => props.theme['blue-200']};
    border: none;
    border-radius: 6px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:disabled{
        cursor: not-allowed;
        opacity: 0.4;
    }

    @media(min-width: 320px){
        min-width: 8rem;
    }

    @media(max-width: 425px){
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(min-width:426px) and (max-width: 767px){
        width: 10rem;
}
    @media(min-width:768px){
    width: 13rem;
}
`

export const NoCartItems = styled.span`
  
    border: 1px dashed ${props => props.theme['white-soft']};
    color: ${props => props.theme['white-soft']};

    @media(max-width: 425px){
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-top: 0.5rem;
    }
    @media(min-width: 426px) and (max-width: 767px){
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin: 1rem 0;
    }
    @media(min-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin: 1rem 0;
        
    
}  
`