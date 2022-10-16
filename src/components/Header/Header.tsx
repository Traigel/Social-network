import React from "react";
import styles from './Header.module.css'
import imgLogo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={styles.header}>
            <img alt={'Logo'} src={imgLogo}/>
            <div className={styles.text}>
                The project is under development. <a href="https://github.com/Traihel/Social-network-TS">Read more on
                GitHub</a>
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div className={styles.title}>
                        {props.login}
                        <button onClick={props.logout}>LogOut</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    )
};