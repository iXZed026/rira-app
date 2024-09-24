import React from 'react';
import "./App.css";
import Header from './component/Header/Header';
import TokensProvider from './context/TokensProvider';

const App = () => {
  return (
    <div className='app'>
      <TokensProvider>
        <Header />
      </TokensProvider>
    </div>
  )
}

export default App