import React, { useState } from 'react';
import "./Wallet.css";
import { IoIosArrowDown } from "react-icons/io";
import ConnectWallet from './ConnectWallet/ConnectWallet';

const Wallet = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="wallet">
        <div className="wallet-container">
          <div className="wallet-flex">
            <div className="no-connection-wallet" >
              <IoIosArrowDown />
              <span>Connect Wallet</span>
            </div>
          </div>
        </div>
      </div>
      <ConnectWallet />
    </>
  )
}

export default Wallet