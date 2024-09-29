import React, { useRef, useContext } from 'react';
import "./Swap.css";
import SwapInfo from './SwapInfo/SwapInfo';
import SwapBox from './SwapBox/SwapBox';
import { SwapContext } from '../../context/TargetRefProvoder';

const Swap = () => {
    //Ref for focus after click on getstarted(َشروع کنید)
    const inputRef = useRef(null);
    //Target scroll
    const swapRef = useContext(SwapContext);

    return (
        <div className="swap" ref={swapRef}>
            <div className="swap-container">
                <div className="swap-flex">
                    <SwapInfo inputRef={inputRef} />
                    <SwapBox inputRef={inputRef} />
                </div>
            </div>
        </div>
    )
}

export default Swap