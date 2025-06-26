import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

const SuperCoin = () =>{
    const [superCoins, setsuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total,item) => total + item.price * item.quantity,0);
    useEffect(() => {
        if (totalAmount >=100 && totalAmount<200){
            setsuperCoins(10);
        } else if (totalAmount>=200 && totalAmount<300){
            setsuperCoins(20);
        } else if (totalAmount>=300){
            setsuperCoins(30);
        } else {
            setsuperCoins(0);
        }
    }, [totalAmount]);
    return(
        <div className="super-coins">
            <h2 className="super-coins-title" style={{textAlign:'center'}}>Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with your order</p>
        </div>
    );
};

export default SuperCoin;