import React from 'react';
import "./TokensItem.css";
import Balance from '../Balance/Balance';

const TokensItem = (props) => {

    const { tokenValue, tokenName, totalSupply, tokenLogo, numberOfTokens } = props

    return (
        <div className="tokens-item">
            <div className="tokens-item-container">
                <div className="tokens-item-flex">
                    <div className="tokens-item-logo">
                        <img src={`../../../Images/${tokenLogo}`} alt="!Image not found" />
                    </div>
                    <div className="tokens-total-supply">
                        <h6>{`${tokenName} ${tokenValue} ${totalSupply}M SUPPLY`}</h6>
                    </div>
                    <div className="tokens-description">
                        <p>Get {tokenValue} token, limited supply avalible</p>
                    </div>
                    <div className="tokens-balance">
                        <Balance numberOfTokens={numberOfTokens} tokenValue={tokenValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokensItem