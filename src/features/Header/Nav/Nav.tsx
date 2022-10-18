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
        <div className={styles.item}>

            <NavLink to="/profile" activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Home"}/>
                <span>Profile</span>
            </NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/messages" activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Messages"}/>
                <span>Messages</span>
            </NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/users" activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Users"}/>
                <span>Users</span>
            </NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/music" activeClassName={styles.activeLink}>
                <SvgSelector svgName={"Music"}/>
                <span>Music</span>
            </NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/news" activeClassName={styles.activeLink}>
                <SvgSelector svgName={"News"}/>
                <span>News</span>
            </NavLink>
        </div>
        <div className={styles.title}>
            {props.login}
            <button onClick={props.logout}>LogOut</button>
        </div>
    </nav>
};