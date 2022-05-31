import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
 <MoralisProvider appId='5IiNn1z4RdwrIuHcIeK3OmBoHqwhh3uC7IGuqaDl' serverUrl='https://mvn3qz8awnaz.usemoralis.com:2053/server'>

    <App /> 
     </MoralisProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
