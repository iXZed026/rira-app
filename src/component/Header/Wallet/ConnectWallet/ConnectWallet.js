import React, { useRef } from 'react';
import "./ConnectWallet.css";
import { tonKeeperId } from '../../../../data/TonKeperId'; //Fake wallet id
import { IoCloseSharp } from "react-icons/io5";


const ConnectWallet = (props) => {

    const { setOpenModal, setWalletId } = props;
    const modalRef = useRef(null);

    const closeModalHandler = () => {
        //Set animation after close
        modalRef.current.className = "close-select-wallet-container";
        //Give time to run the animation
        setTimeout(() => {
            setOpenModal(false);
        }, 750)
    }

    const connectWalletHandler = () => {
        //Random fake id
        const randomId = Math.floor(Math.random() * tonKeeperId.length);
        setWalletId(tonKeeperId[randomId]);
        //Close modal after set random id
        closeModalHandler();
    }

    return (
        <div className="select-wallet">
            <div className="select-wallet-container" ref={modalRef}>
                <div className="select-wallet-header">
                    <IoCloseSharp onClick={closeModalHandler} />
                    <h2>Connect Wallet</h2>
                </div>
                <div className="select-wallet-flex">
                    <div className="wallets-information">
                        <h3>کیف پول چیست؟</h3>
                        <div className="wallets-information-flex">
                            <div className="wallets-information-items">
                                <img src="../../images/wallet.jpg" alt="!Image Not Found" />
                                <div>
                                    <p>خانه‌ای برای دارایی‌های دیجیتال شما کیف پول‌ها برای ارسال، دریافت، ذخیره و نمایش دارایی‌های دیجیتال مانند اتریوم و NFTها استفاده می‌شوند.</p>
                                </div>
                            </div>
                            <div className="wallets-information-items">
                                <img src="../../images/loginWallet.jpg" alt="!Image Not Found" />
                                <div>
                                    <p>راه جدیدی برای ورود به سیستم به جای ایجاد حساب‌های جدید و رمزهای عبور در هر وب‌سایت، تنها کافی است کیف پول خود را متصل کنید.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wallets">
                        <h3>جدید</h3>
                        <div className="wallets-flex">
                            <div className="wallet-items" onClick={connectWalletHandler}>
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