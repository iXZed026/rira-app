import React from 'react';
import "./SwapInfo.css";

const SwapInfo = ({ inputRef }) => {

    const focusHandler = () => {
        inputRef.current.focus()
        inputRef.current.style.height = "0";
        setTimeout(() => inputRef.current.style.height = "65px", 300)
    }

    return (
        <div className="swap-info">
            <div className="swap-info-container">
                <div className="swap-info-flex">
                    <h1 id="swap-title">
                        <span>بازار</span><br />
                        <span> معامله توکن ها</span>
                    </h1>
                    <div className="swap-description">
                        <p>این سایت برای انجام تسک ریرا ساخته شده است. حالا برای تبدیل, ارز مورد نظر را انتخاب کنید.</p>
                    </div>
                    <div className="swap-info-button">
                        <button onClick={focusHandler}>شروع کنید</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwapInfo