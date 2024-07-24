import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from '/styles/GlobalStyles';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
