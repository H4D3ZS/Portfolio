import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
);
