import React from "react";
import s from "./MiniCart.module.css";

const MiniCart = ({cartItemsNumber}) => {
    return (
        <div className={s.miniCart}>
            <img src="https://img.icons8.com/windows/452/shopping-cart.png" alt="goToCartIcon"/>
            <span>{cartItemsNumber} товар(-ов)</span>
        </div>
    );
};

export default MiniCart;