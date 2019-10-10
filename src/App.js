import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Market from "./components/Market";

const App = (props) => {
    return (
        <Switch>
            <Redirect exact from={"/"} to={"/login"}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={"/market"} render={() => <Market/>}/>
            <Route path={"/cart"} render={() => <Cart/>}/>
            <Route path={"*"} render={() => <div>404 PAGE NOT FOUND, sry</div>}/>
        </Switch>
    );
};

export default compose(
    withRouter,
    connect())(App);
