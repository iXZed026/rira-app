import React from 'react';
import "./Swap.css";
import SwapInfo from './SwapInfo/SwapInfo';

const Swap = () => {
    return (
        <div className="swap">
            <div className="swap-container">
                <div className="swap-flex">
                    <SwapInfo />
                </div>
            </div>
        </div>
    )
}

export default Swap