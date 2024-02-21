import styled from 'styled-components'


export const Header = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #111e29;

   @media(min-width:426px) and (max-width: 767px){
        font-size: 1.75rem;
        align-items: center;
}
   @media(min-width:768px){
        justify-content: space-between;

}
`

export const Logo = styled.div`
    color: ${props => props.theme['blue']};
    font-weight: bold;
    display: flex;
    justify-content: center;

    @media(max-width: 425px){
        font-size: 1.5rem;
        
   }
   @media(min-width:426px) and (max-width: 767px){
        font-size: 1.75rem;
        align-items: center;
}
   @media(min-width:768px){
        align-items: center;
        font-size: 2rem;
        margin-left: 5rem;
}

`
export const DropdownContainer = styled.div`

@media(min-width:768px){
        margin-right: 5rem;
}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;

    & .perfil{
        font-size: 24px;
        font-weight: bold;
        margin-left: 1rem;
        padding: 1rem;
        color: ${props => props.theme['blue']};
    }
    & .editArea{
        width: 100%;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 425px){
        
        
   }
   @media(min-width:426px) and (max-width: 767px){
    justify-content: space-around;
}
   @media(min-width:768px){
        justify-content: space-evenly;
    
}
    }
    & .editButton{
        margin-right: 2rem;
        display: flex;
        align-items: center;    
        justify-content: center;
        background: ${props => props.theme['blue']};
        color: ${props => props.theme['black']};
        border: none;
        border-radius: 3px;
        transition: 0.1s ease-in;
        padding: 0.25rem;
    }
    & .editButton:hover{
        background: ${props => props.theme['blue-100']};
        cursor: pointer;
    }

    @media(min-width:426px) and (max-width: 767px){
    
        & .perfil{
        font-size: 2rem;
        font-weight: bold;
        margin-left: 1rem;
        padding: 1rem;
        color: ${props => props.theme['blue']};
    }
    & .editButton{
        margin-right: 2rem;
        display: flex;
        align-items: center;    
        justify-content: center;
        background: ${props => props.theme['blue']};
        color: ${props => props.theme['black']};
        border: none;
        border-radius: 3px;
        transition: 0.1s ease-in;
        padding: 0.4rem;
    }
}
   @media(min-width:768px){
    & .perfil{
        font-size: 2.25rem;
        font-weight: bold;
        margin-left: 1rem;
        padding: 1rem;
        color: ${props => props.theme['blue']};
    }
  
    & .editButton{
        margin-right: 2rem;
        display: flex;
        align-items: center;    
        justify-content: center;
        background: ${props => props.theme['blue']};
        color: ${props => props.theme['black']};
        border: none;
        border-radius: 3px;
        transition: 0.1s ease-in;
        padding: 0.6rem;
    }
    & .editButton:hover{
        background: ${props => props.theme['blue-100']};
        cursor: pointer;

    }
    
}


`
export const ContentContainer = styled.form`
    width: 80%;
    margin-left: 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   @media(min-width:426px) and (max-width: 767px){
        width: 90%;
        height: 90%;
        margin-left: 7.5%;


}
   @media(min-width:768px){
        width: 90%;
        height: 95%;
        margin-left: 5%;

}
   
    
    & label{
        padding: 0.3rem;
        display: flex;
        flex-direction: column;
        color: ${props => props.theme['gray']};

        @media(min-width:426px) and (max-width: 767px){
        padding: 0.2rem;
}
        @media(min-width:768px){
        padding: 0.5rem;
}

    }

    & input{
        width: 100%;
        height: 1.75rem;
        border: 1px solid ${props => props.theme['blue']};
        background: none;
        color: white;

        
   @media(min-width:426px) and (max-width: 767px){
       width: 20rem;
}
   @media(min-width:768px){
      width: 40rem;
      height: 2.5rem;
}
    }
    & input:disabled{
        background: none;
        color: ${props => props.theme['gray']};
        border: 1px solid ${props => props.theme['blue-200']};
        cursor: not-allowed;
    }
    
    & .sendForm{
        width: 70%;
        height: 3rem;
        margin-top: 2rem;
        background: ${props => props.theme['blue']};
        border: none;
        color: white;
        transition: 0.1s ease-in;
        
       
   @media(min-width:426px) and (max-width: 767px){
        width: 30%;
        height: 3rem;
}
   @media(min-width:768px){
        width: 30%;
        height: 3rem;
}

     }
     & .sendForm:hover{
        background: ${props => props.theme['blue-100']};
        cursor: pointer;
     }
`