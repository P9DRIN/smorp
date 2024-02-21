

import styled from 'styled-components'

export const Container = styled.div`

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to{
            transform: rotate(1turn);
            
        }
    }
    
    & svg{
        animation: 0.45s linear infinite loader;
    }

`

export const LoaderContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`