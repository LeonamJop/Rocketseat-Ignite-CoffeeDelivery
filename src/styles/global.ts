import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-base']};
    }

    body {
        background: ${(props) => props.theme['background-base']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    input, textarea, button, label, span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
    }
`
