import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Serif', serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyles;
