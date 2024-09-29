import React from 'react';
import "./App.css";
import Header from './component/Header/Header';
import TokensProvider from './context/TokensProvider';
import Swap from './component/Swap/Swap';
import Tokens from './component/Tokens/Tokens';

const App = () => {
  return (
    <div className='app'>
      <TokensProvider>
        <Header />
        <Swap />
        <Tokens />
      </TokensProvider>
    </div>
  )
}

export default App