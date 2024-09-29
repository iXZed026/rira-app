import React from 'react';
import "./Copy.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Copy = () => {
    return (
        <div className="copy">
            <div className="copy-container">
                <div className="copy-flex">
                    <IoCheckmarkCircleOutline />
                    <span>کپی شد.</span>
                </div>
            </div>
        </div>
    )
}

export default Copy