import React, { useState } from 'react';
import "./Wallet.css";
import { IoIosArrowDown } from "react-icons/io";
import ConnectWallet from './ConnectWallet/ConnectWallet';
import DisconnectWallet from './DisconnectWallet/DisconnectWallet';

const Wallet = () => {

  const [openModal, setOpenModal] = useState(false);
  const [disconnectModal, setDisconnectModal] = useState(false);
  const [walletId, setWalletId] = useState(null);

  const openConnectWalletModal = () => setOpenModal(true);
  const openDisconnectWaletModal = () => setDisconnectModal(true);

  const connectWalletOpration = () => {
    if (walletId) {
      openDisconnectWaletModal();
    } else {
      openConnectWalletModal();
    }
  }

  return (
    <>
      <div className="wallet" onClick={connectWalletOpration}>
        <div className="wallet-container">
          <div className="wallet-flex">
            <div className="no-connection-wallet" >
              <IoIosArrowDown />
              <span>{walletId ? walletId : "Connect Wallet"}</span>
            </div>
          </div>
        </div>
      </div >
      {openModal && <ConnectWallet setOpenModal={setOpenModal} setWalletId={setWalletId} />}
      {disconnectModal && <DisconnectWallet />}
    </>
  )
}

export default Wallet