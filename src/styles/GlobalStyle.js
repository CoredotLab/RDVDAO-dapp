import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {

    background-color: #1E1E2B;
    
  }

  
`;

export default GlobalStyle;
