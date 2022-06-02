import React from 'react'
import { useMoralis } from "react-moralis";
function Home() {

    const {  logout } = useMoralis();

    return (
        <div className='text-6xl font-bold text-center text-gray-800'>
            sifhoeoqisulfheiosdlfhneilosdhfneilosdn
            <button className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg' onClick={logout}>Moralis Metamask Login</button>
        </div>
    )
}

export default Home;
