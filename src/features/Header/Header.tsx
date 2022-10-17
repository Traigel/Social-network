import React from "react";
import styles from './Header.module.scss'
import imgLogo from '../../assets/images/logo.png'
import {SvgSelector} from "../../common/components/svgSelector/SvgSelector";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={styles.headerComponent}>
            <div className={styles.headerBox}>
                <div className={styles.searchBox}>
                    <img
                        className={styles.image}
                        alt={'Logo'}
                        src={imgLogo}
                    />
                    <input
                        className={styles.searchInput}
                        type="text"
                        value={'Search is under development'}
                    />
                    <button className={styles.searchButton}><SvgSelector svgName={"Search"}/></button>
                </div>
                <div className={styles.nav}>

                    <div className={styles.title}>
                        {props.login}
                        <button onClick={props.logout}>LogOut</button>
                    </div>

                </div>
            </div>
        </div>
    )
};