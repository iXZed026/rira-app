import React, { useContext } from 'react';
import "./Tokens.css";
import TokensItem from './TokensItem/TokensItem';
import { TokensContext } from '../../context/TokensProvider';

const Tokens = () => {

    const tokens = useContext(TokensContext);

    return (
        <div className="tokens">
            <div className="tokens-container">
                <div className="tokens-flex">
                    {tokens.map((token, key)=><TokensItem {...token} key={key} />)}
                </div>
            </div>
        </div>
    )
}

export default Tokens