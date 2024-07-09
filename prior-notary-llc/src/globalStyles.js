import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        color: #333;
        background-color: #f4f4f4;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
`;

export default GlobalStyle;
