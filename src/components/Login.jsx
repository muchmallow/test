import React from "react";
import s from "./Login.module.css";
import {reduxForm, Field} from "redux-form";
import renderField from "./Input";
import {Redirect} from "react-router-dom";
import {loginTC} from "../reducers/loginReducer";
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

const LoginForm = ({handleSubmit, valid}) => {
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
            <button disabled={!valid} type={"submit"}>Submit</button>
        </form>
    );
};

const ReduxLoginForm = reduxForm({
    form: "ReduxLoginForm"
})(LoginForm);

const Login = ({loginTC, isAuth}) => {
    const onSubmit = (formData) => {
        loginTC(formData.email, formData.password)
    };
    if (isAuth) {
        return <Redirect to={"/market"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.loginPage.isAuth
});

export default connect(mapStateToProps, {loginTC})(Login);