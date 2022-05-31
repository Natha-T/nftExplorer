import logo from './logo.svg';
import './App.css';
import { useMoralisWeb3Api } from "react-moralis";

import {useState} from 'react'

function App() {

  const Web3Api = useMoralisWeb3Api();


  

    const testnetNFTs = Web3Api.Web3API.account.getNFTs({
      chain: "ropsten",
    });

  
   




 
  return (
    <div>rgdefsjg</div>

  );
}

export default App;
