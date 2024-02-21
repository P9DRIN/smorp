import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid ${props => props.theme['gray']};
    border-radius: 3px;
    height: 5rem;


    color: ${props => props.theme['blue']};

    & .orderNum{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
   

    & .info{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        justify-content: space-between;
        height: 100%;
    }

    & .num{
        color: ${props => props.theme['white']};
    }

    & .btn{
        display: flex;
        align-items: center;
        padding: 0.2rem;
        color: ${props => props.theme['black']};
        background: ${props => props.theme['blue']};
        border: none;
        border-radius: 2px;
        height: 75%;
        cursor: pointer;
        transition: 0.25s ease-in;
    }

    & .btn:hover{
        background: ${props => props.theme['blue-100']};
        color: ${props => props.theme['white']};

        
    }
`