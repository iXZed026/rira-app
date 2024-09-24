import React, { createContext, useState } from 'react';

const TokensContext = createContext();
const SetTokensContext = createContext();

const TokensProvider = ({ children }) => {

    const [tokens, setTokens] = useState();

    return (
        <TokensContext.Provider value={tokens}>
            <SetTokensContext.Provider value={setTokens}>
                {children}
            </SetTokensContext.Provider>
        </TokensContext.Provider>
    )
}

export { TokensContext, SetTokensContext }
export default TokensProvider