import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <p className={s.copyright}>&copy; 2149</p>
        </div>
    );
};

export default Footer;