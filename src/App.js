import React from 'react';
import "./App.css";
import TokensProvider from './context/TokensProvider';

const App = () => {
  return (
    <div className='app'>
      <TokensProvider>
        
      </TokensProvider>
    </div>
  )
}

export default App