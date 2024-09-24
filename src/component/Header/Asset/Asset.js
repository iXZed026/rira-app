import React, { useContext } from 'react';
import "./Asset.css";
import { TokensContext } from '../../../context/TokensProvider';
import { FaFileInvoiceDollar } from "react-icons/fa";

const Asset = () => {

    //Use Tokens Data 
    const tokens = useContext(TokensContext);
    // Dolar
    const usdt = tokens[1].numberOfTokens.toLocaleString();

    return (
        <div className="asset">
            <div className="asset-container">
                <div className="asset-flex">
                    <div className="asset-logo"><FaFileInvoiceDollar /></div>
                    <div className="asset-information">
                        <span> USDT </span>
                        <span>{usdt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asset