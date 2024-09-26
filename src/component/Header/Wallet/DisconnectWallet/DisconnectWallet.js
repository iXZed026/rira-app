import React from 'react';
import "./DisconnectWallet.css";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri"

const DisconnectWallet = ({ walletId }) => {
    return (
        <div className="disconnect-wallet">
            <div className="disconnect-wallet-container">
                <div className="disconnect-wallet-flex">
                    <IoCloseSharp />
                    <div className="disconnect-wallet-body">
                        <div id='disconnect-wallet-picture'><img src="../../../images/alienLogo.png" alt="!Image not found" /></div>
                        <h3>{walletId}</h3>
                    </div>
                    <div className="disconnect-wallet-footer">
                        <button><RiLogoutBoxRLine />Disconnect</button>
                        <button><MdOutlineContentCopy />Copy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisconnectWallet