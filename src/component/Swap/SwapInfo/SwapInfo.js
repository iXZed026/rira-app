import React from 'react';
import "./SwapInfo.css";

const SwapInfo = () => {
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
                        <button>شروع کنید</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwapInfo