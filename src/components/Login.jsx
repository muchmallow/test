import React from "react";
import s from "./Login.module.css";
import {reduxForm, Field, reset} from "redux-form";
import renderField from "./Input";
import {Redirect} from "react-router-dom";
import {clearFormAC, loginTC} from "../reducers/loginReducer";
import {connect} from "react-redux";

const required = value  => (value ? undefined : "This field is required");
const email = email => (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ? "Invalid email address"
    : undefined);
const password = password => (password && !/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{7,}/.test(password)
    ? "Password should contain at least one number, special symbol and character"
    : undefined);
const minLength = value => (
    value && value.length < 8 ? "It should be eight characters or more" : undefined
);

const LoginForm = ({handleSubmit, valid, reset, pristine}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"customerEmail"}
                   type={"text"}
                   component={renderField}
                   label={"Email"}
                   placeholder={"example@mail.com"}
                   validate={[email, required]}/>
            <Field name={"customerPassword"}
                   type={"password"}
                   component={renderField}
                   label={"Password"}
                   placeholder={"example: 1qwerty%"}
                   validate={[minLength, required, password]}/>
            <button className={s.submit} disabled={!valid} type={"submit"}>Submit</button>
        </form>
    );
};

const ReduxLoginForm = reduxForm({
    form: "ReduxLoginForm"
})(LoginForm);

const Login = ({clearFormAC, loginTC, isAuth}) => {
    clearFormAC();
    const onSubmit = (formData) => {
        loginTC(formData.customerEmail, formData.customerPassword)
    };
    if (isAuth) {
        return <Redirect to={"/market"}/>
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <div className={s.form}>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.loginPage.isAuth
});

export default connect(mapStateToProps, {loginTC, clearFormAC})(Login);