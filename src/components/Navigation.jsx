import React from "react";
import s from "./Navigation.module.css";
import {connect} from "react-redux";
import {setIsAuthFalseAC} from "../reducers/loginReducer";
import MiniCart from "./MiniCart";
import {NavLink} from "react-router-dom";

const Navigation = ({isAuth, setIsAuthFalseAC, cartItemsNumber}) => {
    // console.log(products);
    // let itemsInCart = products.map(p => {
    //     return (p.addedToCart === true) ;
    // });

    return (
        <div className={s.navigationWrapper}>
            <NavLink to={"/cart"}><MiniCart cartItemsNumber={cartItemsNumber}/></NavLink>
            {isAuth ? <button onClick={() => setIsAuthFalseAC()}>Log out</button> : <button>Log In</button>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        cartItemsNumber: state.marketPage.cartItemsNumber,
    };
};

export default connect(mapStateToProps, {setIsAuthFalseAC})(Navigation);