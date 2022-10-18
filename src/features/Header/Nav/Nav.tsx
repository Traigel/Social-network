import React from "react";
import styles from './Nav.module.scss';
import {NavLink} from "react-router-dom";
import {SvgSelector} from "../../../common/components/svgSelector/SvgSelector";

type NavPropsType = {
    login: string | null
    logout: () => void
}

export const Nav = (props: NavPropsType) => {
    return <nav className={styles.navBox}>
        <div className={styles.navItem}>
            <NavLink to="/profile" className={styles.nav} activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Home"}/>
                <span>Home</span>
            </NavLink>
        </div>
        <div className={styles.navItem}>
            <NavLink to="/messages" className={styles.nav} activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Messages"}/>
                <span>Messages</span>
            </NavLink>
        </div>
        <div className={styles.navItem}>
            <NavLink to="/users" className={styles.nav} activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Users"}/>
                <span>Users</span>
            </NavLink>
        </div>
        <div className={styles.navItem}>
            <NavLink to="/music" className={styles.nav} activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Music"}/>
                <span>Music</span>
            </NavLink>
        </div>
        <div className={styles.navItem}>
            <NavLink to="/news" className={styles.nav} activeClassName={styles.activeLink}>
                <SvgSelector svgName={"News"}/>
                <span>News</span>
            </NavLink>
        </div>
        <div className={styles.nameNav}>
            {props.login}
            <button onClick={props.logout}>LogOut</button>
        </div>
    </nav>
};