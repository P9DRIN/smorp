import styled from 'styled-components'

export const Container = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme['white']};
  color: ${props => props.theme['white']};
  text-transform: uppercase;
  transition: all 0.2s;
  border-radius: 9999px;

    @media(min-width:426px) and (max-width: 767px){
      width: 2rem;
      height: 2rem;
}
    @media(min-width:768px){
      width: 2.5rem;
      height: 2.5rem;
    }


  &:hover {
    background-color: ${props => props.theme['white']};
  }

  &[data-state='true'] {
    background-color: ${props => props.theme['blue']};
  }
  input {
    display: none;
    
  }

  svg {
    color: ${props => props.theme['black']};
  }
`