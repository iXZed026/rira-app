import React, { useContext } from 'react';
import "./Tokens.css";
import TokensItem from './TokensItem/TokensItem';
import { TokensContext } from '../../context/TokensProvider';
import { TokensContext as Tc } from '../../context/TargetRefProvider2';

const Tokens = () => {

    const tokens = useContext(TokensContext);
    //Target scroll
    const tokensRef=useContext(Tc)

    return (
        <div className="tokens" ref={tokensRef}>
            <div className="tokens-container">
                <div className="tokens-flex">
                    {tokens.map((token, key)=><TokensItem {...token} key={key} />)}
                </div>
            </div>
        </div>
    )
}

export default Tokens