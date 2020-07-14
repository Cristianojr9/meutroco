import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ffff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-size: 84px
  }

  button {
    cursor: pointer;
  }
`;
