import React from "react";
import s from "./CartItem.module.css";

const CartItem = ({id, img, title, price, removeFromCartAC}) => {
    return (
        <div className={s.cartItem}>
            <div className={s.imgContainer}>
                <img src={img} alt="cartItem"/>
            </div>
            <div className={s.titleContainer}>
                <p>{title}</p>
            </div>
            <div className={s.buttonsContainer}>
                <button className={s.buttonPay}>Оплатить {price} грн</button>
                <button className={s.buttonDelete} onClick={() => removeFromCartAC(id)}>Удалить</button>
            </div>
        </div>
    );
};

export default CartItem;