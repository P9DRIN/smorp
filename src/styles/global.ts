import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    :focus{
    outline: 0;
    }

    body{
    background-color: ${(props) => props.theme['black']};
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
}
    body, input, textarea, button{
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    }
`