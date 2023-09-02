import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle.js';
import Theme from './styles/Theme.js';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes.js';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </>,

  document.getElementById('root'),
);
