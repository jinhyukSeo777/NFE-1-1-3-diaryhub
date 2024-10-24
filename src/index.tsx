import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle, LoadFont } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadFont />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
