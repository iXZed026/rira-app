import React, { createContext, useState } from 'react';
import { TokensData } from '../data/TokensData';

const TokensContext = createContext();
const SetTokensContext = createContext();

const TokensProvider = ({ children }) => {

    const [tokens, setTokens] = useState(TokensData);

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