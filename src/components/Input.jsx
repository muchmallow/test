import React from 'react';

const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => {
    const hasError = touched && error;
    return (
        <div>
            <div>
                <label>{label}</label>
                <input {...input} placeholder={placeholder} type={type}/>
                {console.log(touched)}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export default renderField;