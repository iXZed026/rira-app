import React, { useRef } from 'react';
import "./Swap.css";
import SwapInfo from './SwapInfo/SwapInfo';
import SwapBox from './SwapBox/SwapBox';

const Swap = () => {
    //Ref for focus after click on getstarted(َشروع کنید)
    const inputRef = useRef(null);

    return (
        <div className="swap">
            <div className="swap-container">
                <div className="swap-flex">
                    <SwapInfo inputRef={inputRef} />
                    <SwapBox inputRef={inputRef}/>
                </div>
            </div>
        </div>
    )
}

export default Swap