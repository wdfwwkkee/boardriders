import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/assets/styles/global.scss'
import { StyledEngineProvider } from '@mui/material/styles';
import Router from './components/Routes/Router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router />
    </StyledEngineProvider>
  </React.StrictMode>
);

