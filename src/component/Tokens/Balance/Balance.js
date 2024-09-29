import React from 'react';
import "./Balance.css";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Balance = ({ numberOfTokens, tokenValue }) => {


    return (
        <div className="balance">
            <div className="balance-container">
                <div className="balance-flex">
                    <div className="balance-information">
                        <span>{numberOfTokens.toLocaleString()}</span>
                        <span> {tokenValue} </span>
                    </div>
                    <div className="balance-logo"><FaFileInvoiceDollar /></div>
                </div>
            </div>
        </div>
    )
}

export default Balance