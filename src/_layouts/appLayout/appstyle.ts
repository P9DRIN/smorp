import styled from 'styled-components'


export const Header = styled.header`
    
    background: #111e29;
   
    @media(max-width: 425px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        flex-wrap: wrap;
        gap: 2rem;
    }
    @media(min-width:426px) and (max-width: 767px){
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        
    }

    @media(min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 2rem;
    }

    
`
export const LogoWrapper = styled.div`
 
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
   
    
    color: ${props => props.theme['blue']};
    

    & svg{
        color: ${props => props.theme['blue']};
    }

    
`


export const ContentContainer = styled.div`

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
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
       
   }
   @media(min-width:426px) and (max-width: 767px){
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: 80vh;
        overflow: auto;
        
   }
   @media(min-width: 768px){
        display: flex;
        justify-content: space-evenly;
        height: 85vh;
        overflow: auto;
    }


`

export const DropDownWrapper = styled.div`
    text-decoration: none;

    @media(max-width: 425px){
        flex-wrap: wrap;
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;
    }
    @media(min-width:426px) and (max-width: 767px){
        display: flex;
        gap: 2rem;
    }
    @media(min-width: 768px){
        display: flex;
        align-items: center;
        gap: 3rem;
    
    }


`