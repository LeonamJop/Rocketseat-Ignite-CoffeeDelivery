import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        background: ${(props) => props.theme['background-base']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        
        padding: 0.75rem;

        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;

        background: ${(props) => props.theme['base-input']};

        &:focus {
            border: 1px solid ${(props) => props.theme['yellow-base']};
        }
    }

    textarea, button, label, span, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
    }
`
