import React, { useRef, useState } from 'react';
import "./DisconnectWallet.css";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri"
import Copy from '../Copy/Copy';

const DisconnectWallet = (props) => {

    const { walletId, setWalletId, setDisconnectModal } = props;

    const modalRef = useRef(null);
    const [copyModal, setCopyModal] = useState(false);

    const closeModalHandler = () => {
        //Set animation after close
        modalRef.current.className = "close-disconnect-wallet-container";
        //Give time to run the animation
        setTimeout(() => {
            setDisconnectModal(false);
        }, 750)
    }

    //Disconnect wallet opration
    const disconnectWalletHandler = async () => {
        closeModalHandler()
        setWalletId(null);
    }

    //Copy wallet id
    const handleCopyText = () => {
        if (walletId) {
            navigator.clipboard.writeText(walletId)
                .then(() => {
                    setCopyModal(true);
                    setTimeout(() => setCopyModal(false), 3500)
                })
        }
    }

    return (
        <div className="disconnect-wallet">
            <div className="disconnect-wallet-container" ref={modalRef}>
                <div className="disconnect-wallet-flex">
                    <IoCloseSharp onClick={closeModalHandler} />
                    <div className="disconnect-wallet-body">
                        <div id='disconnect-wallet-picture'><img src="../../../images/alienLogo.png" alt="!Image not found" /></div>
                        <h3>{walletId ? walletId : "Disconnected"}</h3>
                    </div>
                    <div className="disconnect-wallet-footer">
                        <button onClick={disconnectWalletHandler}><RiLogoutBoxRLine />لغو اتصال</button>
                        <button onClick={handleCopyText}><MdOutlineContentCopy />کپی</button>
                    </div>
                </div>
            </div>
            {copyModal && <Copy />}
        </div >
    )
}

export default DisconnectWallet