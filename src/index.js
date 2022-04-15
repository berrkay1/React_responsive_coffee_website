import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContexProvider } from './components/ContexCoffee';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContexProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContexProvider>
  
);

