import React from "react";
import Navigation from "./Navigation";
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {removeFromCartAC} from "../reducers/marketReducer";
import CartItem from "./CartItem";
import s from "./Cart.module.css";

const Cart = ({isAuth, products, removeFromCartAC, history, cartItemsNumber}) => {
    if (isAuth === false) {
        history.push("/login");
    }

    const itemsInCart = products.map(p => {
        return (p.addedToCart === true) && <CartItem key={p.id} id={p.id}
                                                     img={p.img}
                                                     title={p.title} price={p.price}
                                                     removeFromCartAC={removeFromCartAC}/>
    });

    return (
        <div>
            <Navigation/>
            {(cartItemsNumber > 0) && <div>
                {itemsInCart}
            </div>}
            {(cartItemsNumber < 1) && <div className={s.emptyCart}>
                <p>В корзине ничего нет :(</p>
                <p>Исправьте это в <NavLink to={"/market"}>Магазине</NavLink></p>
            </div>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        products: state.marketPage.products,
        cartItemsNumber: state.marketPage.cartItemsNumber
    };
};

export default compose(
    connect(mapStateToProps, {removeFromCartAC}),
    withRouter
)(Cart);