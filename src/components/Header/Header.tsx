import React from "react";
import styles from './Header.module.css'
import imgLogo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <img alt={'Logo'} src={imgLogo}/>
            <div className={styles.loginBlock}>
                <h3>
                    {props.isAuth ?
                        props.login
                        :
                        <NavLink to={'/login'}>Login</NavLink>
                    }
                </h3>

            </div>
        </div>
    </div>
};