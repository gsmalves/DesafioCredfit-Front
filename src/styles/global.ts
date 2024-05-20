import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFF;
    --sub-background: #F0F2F5;
    --orange: #FF681E;
    --light-blue: #3ABBBA;
    --dark-grey: #707070;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    height: 15px; /* Altura da barra de rolagem */
  }

  /* Estilizando a trilha da barra de rolagem */
  ::-webkit-scrollbar-track {
    background: #D6DBDB; /* Cor de fundo da trilha da barra de rolagem */
  }

  /* Estilizando o controle da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background: #888; /* Cor do controle da barra de rolagem */
    border-radius: 16px 0px 0px 0px; /* Borda arredondada da barra de rolagem */
  }

  /* Estilizando o controle da barra de rolagem ao passar o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Cor do controle da barra de rolagem ao passar o mouse */
  }
`;
