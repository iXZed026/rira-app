import React from 'react';
import "./ConnectWallet.css";
import { IoCloseSharp } from "react-icons/io5";


const ConnectWallet = () => {
    return (
        <div className="select-wallet">
            <div className="select-wallet-container">
                <div className="select-wallet-header">
                    <IoCloseSharp />
                    <h2>Connect Wallet</h2>
                </div>
                <div className="select-wallet-flex">
                    <div className="wallets-information">

                    </div>
                    <div className="wallets">
                        <h3>Recent</h3>
                        <div className="wallets-flex">
                            <div className="wallet-items">
                                <span>TonKeper</span>
                                <img src="../../images/tonKeeper.png" alt="!Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet