import React, { useContext, useState } from 'react';
import "./SwapBox.css";
import { TokensContext, SetTokensContext } from '../../../context/TokensProvider';
import { FaEquals } from "react-icons/fa";

const SwapBox = ({ inputRef }) => {
    //Get token data by context
    const tokens = useContext(TokensContext);
    const SetTokens = useContext(SetTokensContext);
    //Input values
    const [sendInputValue, setSendInputValue] = useState("");
    const [receiveInputValue, setReceiveInputValue] = useState("");
    //Option values
    const [sendTokensValue, setSendTokensValue] = useState("USDT");
    const [receiveTokensValue, setReceiveTokensValue] = useState("RIAL");

    //Set input value opration
    const setSendValueHandler = (e) => {
        const value = Number(e.target.value)

        //Set value
        if (value !== 0) {
            if (value.toString().length < 8) {
                setSendInputValue(value);
            }
        } else {
            setSendInputValue("");
        }
    }


    React.useEffect(() => {
        // if (sendTokensValue === "USDT" && receiveTokensValue === "RIAL") {
        const findFirstToken = tokens.find(token => token.tokenValue === sendTokensValue);
        const findSecoundToken = tokens.find(token => token.tokenValue === receiveTokensValue);
        if (sendTokensValue !== receiveTokensValue) {
            //Calculation of token to Tomans
            if (receiveTokensValue === "RIAL") {
                setReceiveInputValue(sendInputValue * findFirstToken.rialPrice);
            }
            //Tomans to token 
            else if (sendTokensValue === "RIAL") {
                setReceiveInputValue(sendInputValue / findSecoundToken.rialPrice);
            }
            //Tokes to dolar 
            else if (receiveTokensValue === "USDT") {
                setReceiveInputValue(sendInputValue * findFirstToken.dolarPrice);
            }
            //dolar to token 
            else if (receiveTokensValue === "BTC") {
                setReceiveInputValue(sendInputValue / findSecoundToken.dolarPrice);
            }
        } else {
            setReceiveInputValue(sendInputValue);
        }
    }, [sendInputValue, receiveTokensValue, sendTokensValue]);

    const swapHandler = () => {
        //Find token
        const findToken = tokens.find(token => token.tokenValue === sendTokensValue);
        const { numberOfTokens } = findToken;

        if (sendInputValue <= numberOfTokens) {
            const findTokenForSwapPrice = tokens.find(token => token.tokenValue === receiveTokensValue);

            if (receiveTokensValue === "RIAL") {
                SetTokens((prevTokens) =>
                    prevTokens.map(token =>
                        token.tokenValue === findTokenForSwapPrice.tokenValue
                            ? { ...token, numberOfTokens: token.numberOfTokens + receiveInputValue }
                            : token
                    )
                );
                SetTokens((prevTokens) =>
                    prevTokens.map(token =>
                        token.tokenValue === findToken.tokenValue
                            ? { ...token, numberOfTokens: token.numberOfTokens - (receiveInputValue / token.rialPrice) }

                            : token
                    )
                );
            } else if (receiveTokensValue === "USDT") {
                SetTokens((prevTokens) =>
                    prevTokens.map(token =>
                        token.tokenValue === findTokenForSwapPrice.tokenValue
                            ? { ...token, numberOfTokens: token.numberOfTokens + (receiveInputValue * 1000) }
                            : token
                    )
                );
                SetTokens((prevTokens) =>
                    prevTokens.map(token =>
                        token.tokenValue === findToken.tokenValue
                            ? { ...token, numberOfTokens: token.numberOfTokens - sendInputValue }

                            : token
                    )
                );
            }
            setSendInputValue("")
        } else {
            alert(`موجودی ${sendTokensValue} کافی نیست!`)
        }



    }

    return (
        <div className="swap-box">
            <div className="swap-box-container">
                <div className="swap-box-header">
                    <h2>Swap</h2>
                </div>
                <div className="swap-box-body">
                    <div className="send-input">
                        <input
                            type="number"
                            placeholder='0.0'
                            value={sendInputValue}
                            min="0"
                            max="3"
                            onChange={setSendValueHandler}
                            ref={inputRef}
                        />
                        <select name="" id="tokens-select" onChange={e => setSendTokensValue(e.target.value)}>
                            {tokens.map((token, key) => (
                                <option id="tokens-item" key={key} value={token.tokenValue}>{token.tokenName}</option>)
                            )}
                        </select>
                    </div>
                    <div className="exchange-tokens">
                        <FaEquals />
                    </div>
                    <div className="receive-input">
                        <input
                            type="text"
                            placeholder='0.0'
                            value={receiveInputValue.toLocaleString()}
                            min="0"
                            max="50"
                            disabled
                        />
                        <select name="" id="tokens-select" onChange={e => setReceiveTokensValue(e.target.value)}>
                            <option id="tokens-item" value="RIAL">Toman</option>
                            <option id="tokens-item" value="USDT">USDT</option>

                        </select>
                    </div>
                </div>
                <div className="swap-box-footer">
                    <button onClick={swapHandler}>Swap</button>
                </div>
            </div>

        </div>
    )
}

export default SwapBox