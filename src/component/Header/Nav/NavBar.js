import React, { useContext } from 'react';
import "./NavBar.css";
import { SwapContext } from '../../../context/TargetRefProvoder';
import { TokensContext as Tc } from '../../../context/TargetRefProvider2';

const NavBar = () => {

    //Set ref for scoll target
    const swapRef = useContext(SwapContext);
    const tokensRef=useContext(Tc)

    const tokensScrollHandle = () => {
        tokensRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const swapScrollHandle = ()=>{
        swapRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav>
            <ul>
                <li onClick={swapScrollHandle}>معامله</li>
                <li onClick={tokensScrollHandle}>توکن ها</li>
            </ul>
        </nav>
    )
}

export default NavBar