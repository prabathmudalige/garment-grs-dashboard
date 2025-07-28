import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
import './index.css'; // You might not have this, but it's common. If it causes an error, you can remove this line.
import App from './App'; // Import your main App component

// Get the root element from public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
