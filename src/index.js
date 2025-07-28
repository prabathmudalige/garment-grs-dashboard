import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
import './index.css'; // This line imports your global CSS styles
import App from './App'; // Import your main App component

// Get the root element from public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
