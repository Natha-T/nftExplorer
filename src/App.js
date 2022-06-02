import logo from './logo.svg';
import './App.css';
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralis } from "react-moralis";
import {useState, useEffect} from 'react'
import axios from 'axios';
import Home from './Home';

function App() {



  const { authenticate, isAuthenticated, user, logout } = useMoralis();


    if (!isAuthenticated) {


  return (
 <div className=' h-screen grid place-content-center'>
   
    <div className=''>
  <h2 className='text-center font-mono text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white'>Enter to App</h2>
  <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={authenticate}>Moralis Metamask Login</button>

 </div>
</div>
  );
  }
else 
  return (
    <div className=' h-screen grid place-content-center'>
  <Home/>
</div>
  ); }


export default App;
