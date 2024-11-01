import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle, LoadFont } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollToTop from './utils/ScrollToTop';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <LoadFont />
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
