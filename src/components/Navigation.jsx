import React from "react";
import s from "./Navigation.module.css";
import {connect} from "react-redux";
import {setIsAuthFalseAC} from "../reducers/loginReducer";

const Navigation = ({isAuth, setIsAuthFalse}) => {
    return (
        <div className={s.navigationWrapper}>
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