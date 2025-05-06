// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Your main app component
import './index.css';  // Your styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* Wrap the entire app with BrowserRouter */}
    <App />
  </BrowserRouter>
);
