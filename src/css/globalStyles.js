import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  p {
    margin: 0;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .black--text {
    color: #000;
  }

  .ml-3 {
    margin-left: 15px;
  }

  .mt-3 {
    margin-top: 15px;
  }

  .mt-5 {
    margin-top: 25px;
  }

  .mb-3 {
    margin-bottom: 15px;
  }
`;

export default GlobalStyle;
