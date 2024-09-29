import React from 'react';
import "./App.css";
import Header from './component/Header/Header';
import TokensProvider from './context/TokensProvider';
import Swap from './component/Swap/Swap';
import Tokens from './component/Tokens/Tokens';
import TargetRefProvoder from './context/TargetRefProvoder';
import TargetRefProvoder2 from './context/TargetRefProvider2';

const App = () => {
  return (
    <div className='app'>
      <TargetRefProvoder>
        <TargetRefProvoder2>
          <TokensProvider>
            <Header />
            <Swap />
            <Tokens />
          </TokensProvider>
        </TargetRefProvoder2>
      </TargetRefProvoder>
    </div>
  )
}

export default App