import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material/';
import { Contextprovider } from './hooks/useStateContext';



const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contextprovider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Contextprovider>
  </React.StrictMode>
);


