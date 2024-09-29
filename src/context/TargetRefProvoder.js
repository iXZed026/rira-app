import React, { createContext, useRef } from 'react';

const SwapContext = createContext();

const TargetRefProvoder = ({ children }) => {

    const swapRef = useRef(null);

    return (
        <SwapContext.Provider value={swapRef}>
            {children}
        </SwapContext.Provider>
    )
}

export { SwapContext }
export default TargetRefProvoder