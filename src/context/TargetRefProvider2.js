import React, { createContext, useRef } from 'react';

const TokensContext = createContext();

const TargetRefProvoder2 = ({ children }) => {

    const tokensRef = useRef(null);

    return (
        <TokensContext.Provider value={tokensRef}>
            {children}
        </TokensContext.Provider>
    )
}

export { TokensContext }
export default TargetRefProvoder2