import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { GlobalStyles } from './app/GlobalStyled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
