import React from "react";
import s from "./Product.module.css";

const Product = ({id, name, weight, img, title, description, price, addedToCart, addToCartAC}) => {
    return (
        <div className={s.product}>
            <div className={s.title}><h1>{title}</h1></div>
            <div className={s.main}>
                <div className={s.imgWrapper}><img src={img} alt={name}/></div>
                <div className={s.description}>{description}</div>
            </div>
            <div className={s.buy}>
                <span className={s.price}>Цена: {price} грн</span>
                {addedToCart
                    ? <button className={s.buyBtn}>Перейти в корзину</button>
                    : <button onClick={() => addToCartAC(id)} className={s.buyBtn}>Добавить в корзину</button>}
            </div>
        </div>
    );
};

export default Product;