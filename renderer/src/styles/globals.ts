import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  body {
    background-color: #23232E;
    font-family: 'Roboto', sans-serif;
  }
`;
