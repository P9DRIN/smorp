import styled from 'styled-components'


export const Header = styled.header`
    height: 7rem;
    padding: 4rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #111e29;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
  
    width: 8rem;
    
    color: ${props => props.theme['blue']};
    font-weight: 600;
    font-size: 2rem;

    & svg{
        color: ${props => props.theme['blue']};

    }
`


export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

`

export const DropDownWrapper = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;

`