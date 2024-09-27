import React from 'react';
import "./App.css";
import Header from './component/Header/Header';
import TokensProvider from './context/TokensProvider';
import Swap from './component/Swap/Swap';

const App = () => {
  return (
    <div className='app'>
      <TokensProvider>
        <Header />
        <Swap />
      </TokensProvider>
    </div>
  )
}

export default App