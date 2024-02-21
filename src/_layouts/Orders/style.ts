import styled from 'styled-components'


export const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #111e29;
`

export const Logo = styled.div`
    color: ${props => props.theme['blue']};
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: center;

`

export const Container = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`

export const OrderList = styled.div`
    width: 90%;
    height: 90%;

    & .mid{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`