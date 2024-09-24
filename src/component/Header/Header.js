import React from 'react';
import "./Header.css";
import NavBar from './Nav/NavBar';
import { FaRegCopyright } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-flex">
                    <div className="header-right-items">
                        <div className="header-logo">
                            <FaRegCopyright />
                        </div>
                        <NavBar />
                    </div>
                    <div className="header-left-items">
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header