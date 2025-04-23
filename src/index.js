import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18+
import './index.css';
import App from './App';
import { CssBaseline } from '@mui/material';

// Create a root element for React 18 and higher
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
