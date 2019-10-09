import React from "react";
import Navigation from "./Navigation";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Product from "./Product";
import {addToCartAC} from "../reducers/marketReducer";
import s from "./Market.module.css";

const Market = (props) => {
    if (props.isAuth === false) {
        props.history.push("/login");
    }

    const products = props.products.map(p => <Product key={p.id}
                                                      id={p.id}
                                                      name={p.name}
                                                      weight={p.weight}
                                                      img={p.img}
                                                      title={p.title}
                                                      description={p.description}
                                                      price={p.price}
                                                      addedToCart={p.addedToCart}
                                                      addToCartAC={props.addToCartAC}/>);

    return (
        <div className={s.marketContainer}>
            <Navigation />
            <h1 className={s.title}>MARKET</h1>
            <div className={s.productsList}>
                {products}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        products: state.marketPage.products
    };
};

export default compose(
    connect(mapStateToProps, {addToCartAC}),
    withRouter
)(Market);