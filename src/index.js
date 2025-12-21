import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ShoppingListProvider } from "./context/ShoppingListContext";
import { LanguageProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider> 
      <ShoppingListProvider>
        <App />
      </ShoppingListProvider>
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
