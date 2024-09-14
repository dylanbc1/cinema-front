import React from 'react';
import ReactDOM from 'react-dom/client'; // cambiar'react-dom' a 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap

// Esto es lo que hay que cambiar
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
