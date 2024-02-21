import styled from 'styled-components'


export const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
    @keyframes circle{
        0%{
            border-top-color: ${props => props.theme['blue-100']};
            border-right-color: ${props => props.theme['blue-300']};
            border-bottom-color: ${props => props.theme['blue-300']};
            border-left-color: ${props => props.theme['blue-300']};
        }
        33%{
            border-top-color: ${props => props.theme['blue-100']};
            border-right-color: ${props => props.theme['blue-100']};
            border-bottom-color: ${props => props.theme['blue-300']};
            border-left-color: ${props => props.theme['blue-300']};
        }
        66%{
            border-top-color: ${props => props.theme['blue-100']};
            border-right-color: ${props => props.theme['blue-100']};
            border-bottom-color: ${props => props.theme['blue-100']};
            border-left-color: ${props => props.theme['blue-300']};
        }
        80%{
            border-top-color: ${props => props.theme['blue-100']};
            border-right-color: ${props => props.theme['blue-100']};
            border-bottom-color: ${props => props.theme['blue-100']};
            border-left-color: ${props => props.theme['blue-100']};
        }
        100%{
            border-top-color: ${props => props.theme['blue']};
            border-right-color: ${props => props.theme['blue']};
            border-bottom-color: ${props => props.theme['blue']};
            border-left-color: ${props => props.theme['blue']};
            box-shadow: -1px 0px 20px 10px rgba(0,166,251,0.2);
        }
    }

    @keyframes growthUp{
        0%{
        font-size: 60px;
        stroke-dashoffset: 251.2;
        transform: rotate(400deg);
        color: ${props => props.theme['white-soft']};
        }
        25%{
        transform: rotate(220deg);

        }
        50%{
        transform: rotate(380deg);

        }
        100%{
        font-size: 80px;
        stroke-dashoffset: 0;
        transform: rotate(360deg);
        color: ${props => props.theme['white']};
        }
    }
    
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    & .transitionWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        padding: 0.5rem;
        border-radius: 50%;
        border: 10px solid ${props => props.theme['blue']};
        animation: circle 1.75s step-start;
        margin-top: 8rem;
        box-shadow: -1px 0px 20px 14px rgba(0,166,251,0.4);
    }
    & svg{
        font-size: 80px;
        animation: growthUp 1.90s forwards;
        stroke-dasharray: 251.2;
        stroke-dashoffset: 0;
    }

    & .success{
        margin-top: 1.25rem;
        font-size: 40px;
        color: ${props => props.theme['white']};
        font-weight: 400;
    }

    & .confirmedOrderTag{
        color: ${props => props.theme['gray']};

        & b{
            color: ${props => props.theme['blue']};
        }
    }
    & .infoContainer{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        & .fullName{
            color: ${props => props.theme['blue']};
            font-weight: bold;
        }
        & span{
            text-align: center;
        }
    }

    & .orders{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        gap: 0.2rem;
        color: ${props => props.theme['blue']};

        & svg{
        margin-left: -5px;
        color: ${props => props.theme['blue']} !important;

        }

    }

`
