import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { registerSW } from 'virtual:pwa-register';

// Create a custom theme
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',  // Example color
    },
    secondary: {
      main: '#19857b',  // Example color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,  // Base font size
  },
  // You can also customize other theme aspects here
});

// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Show a prompt to the user asking them if they want to refresh the page to use the new version
    if (confirm("A new version is available, do you want to refresh?")) {
      updateSW();
    }
  },
  onOfflineReady() {
    // Show a message when the app is ready to work offline
    console.log("The app is ready to work offline!");
  },
});

// Render the app with the theme
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
);
