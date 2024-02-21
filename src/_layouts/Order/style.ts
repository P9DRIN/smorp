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

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    height: 90vh;

    & .orderDetailsTag{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;

        & .orderId{
            color: ${props => props.theme['blue']};
            font-weight: bold;
        }

       
    }

    & .contentWrapper{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0.5rem;
        border-bottom: 1px solid ${props => props.theme['blue-200']};
        

        & .charWrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .45rem;
        }
    }

    & img{
            width: 12rem;
            border-bottom: 1px solid ${props => props.theme['blue']};
            margin-bottom: 0.5rem;
            padding: 1rem;
        }

    

    & .finalInfoWrapper{
        margin-left: 3rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;

        & div{
            display: flex;
            gap: 0.5rem;
        }

    & .payMethod{
        display: flex; 
        justify-content: space-between;
        align-items: flex-end;
        width: 86%;
    }
    & .delTax{
        display: flex; 
        justify-content: space-between;
        align-items: flex-end;
        width: 86%;
    }
    & .finTotal{
        display: flex; 
        justify-content: space-between;
        align-items: flex-end;
        width: 86%;
    }

    & .resStatic{
        color: ${props => props.theme['gray']};
        font-weight: bold;
    }
    & .resApi{
        color: ${props => props.theme['blue']};
        font-weight: bold;
    }
    }
`