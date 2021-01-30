import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyled;