import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MoralisProvider } from "react-moralis";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
 <MoralisProvider appId='maqBgCForQvIXmOTGOxIxzWqClA3TF9KxY7tx29Y' serverUrl='https://vdoyewmc0aey.usemoralis.com:2053/server'>

    <App /> 
     </MoralisProvider>
  </React.StrictMode>

);

