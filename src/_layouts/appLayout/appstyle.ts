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
   
    
    color: ${props => props.theme['blue']};
    

    & svg{
        color: ${props => props.theme['blue']};
    }

    
`


export const ContentContainer = styled.div`
    
   @media(max-width: 425px){
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
       
   }
   @media(min-width: 768px){
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      
        
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

    @media(min-width: 768px){
        display: flex;
        align-items: center;
        gap: 3rem;
        
        
    }


`