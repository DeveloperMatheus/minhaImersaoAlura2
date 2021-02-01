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

  .orange {
    background-color: orange;
  }
  
  .text-center {
    text-align: center;
  }

  // Propriedades flex isoladas
  .flex {
    display: flex;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-column {
    flex-direction: column;
  }
  .align-center {
    align-items: center;
  }
  .align-start {
    align-items: start;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }

  .w-100 {
    width: 100%;
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
