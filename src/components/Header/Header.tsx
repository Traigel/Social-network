import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return <div className={s.header}>
        <div className={s.logo}>
            <img src={'https://cdn.logo.com/hotlink-ok/logo-social.png'}/>
        </div>
    </div>
};