import React from "react";
import s from './Header.module.css'
import imgLogo from '../../assets/images/logo.png'

export const Header = () => {
    return <div className={s.header}>
        <div className={s.logo}>
            <img alt={'Logo'} src={imgLogo}/>
        </div>
    </div>
};