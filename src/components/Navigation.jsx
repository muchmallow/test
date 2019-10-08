import React from "react";
import s from "./Navigation.module.css";
import {connect} from "react-redux";
import {setIsAuthFalseAC} from "../reducers/loginReducer";
import MiniCart from "./MiniCart";
import {NavLink} from "react-router-dom";

const Navigation = ({isAuth, setIsAuthFalseAC, itemsInCartNumber}) => {
    return (
        <div className={s.navigationWrapper}>
            <NavLink to={"/cart"}><MiniCart itemsInCartNumber={itemsInCartNumber}/></NavLink>
            {isAuth ? <button onClick={() => setIsAuthFalseAC()}>Log out</button> : <button>Log In</button>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth
    };
};

export default connect(mapStateToProps, {setIsAuthFalseAC})(Navigation);