import React from "react";
import s from "./Product.module.css";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const Product = ({id, name, weight, img, title, description, price, addedToCart, addToCartAC, history}) => {
    return (
        <div className={s.product}>
            <div className={s.title}><h1>{title}</h1></div>
            <div className={s.main}>
                <div className={s.imgWrapper}><img src={img} alt={name}/><p>{weight} грамм</p></div>
                <div className={s.description}>{description}</div>
            </div>
            <div className={s.buy}>
                <span className={s.price}>Цена: {price} грн</span>
                {addedToCart
                    ? <button onClick={() => history.push("/cart")} className={s.buyBtn}>Перейти в корзину</button>
                    : <button onClick={() => addToCartAC(id)} className={s.buyBtn}>Добавить в корзину</button>}
            </div>
        </div>
    );
};

export default compose(
    withRouter
)(Product);