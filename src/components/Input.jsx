import React from 'react';
import s from "./Login.module.css";

const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => {
    const hasError = touched && error;
    return (
        <div className={s.renderField}>
            <div className={s.input}>
                <label className={s.label}>{label}</label>
                <input {...input} placeholder={placeholder} type={type}/>
            </div>
            {hasError && <span className={s.error}>{error}</span>}
        </div>
    );
};

export default renderField;