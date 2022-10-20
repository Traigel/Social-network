import styles from "./NavOpenMenu.module.scss";
import {NavLink} from "react-router-dom";
import {SvgSelector} from "../../../../common/components/svgSelector/SvgSelector";
import React from "react";

type NavOpenMenuPropsType = {
    visibilityCallBack: () => void
}

export const NavOpenMenu = (props: NavOpenMenuPropsType) => {
    return (
        <div className={styles.navOpenMenuBox}>
            <div className={styles.navItem}>
                <NavLink
                    to="/profile"
                    className={styles.nav}
                    activeClassName={styles.activeLink}
                    onClick={props.visibilityCallBack}
                >
                    <SvgSelector svgName={"Home"}/>
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink
                    to="/messages"
                    className={styles.nav}
                    activeClassName={styles.activeLink}
                    onClick={props.visibilityCallBack}
                >
                    <SvgSelector svgName={"Messages"}/>
                    <span>Messages</span>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink
                    to="/users"
                    className={styles.nav}
                    activeClassName={styles.activeLink}
                    onClick={props.visibilityCallBack}
                >
                    <SvgSelector svgName={"Users"}/>
                    <span>Users</span>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink
                    to="/music"
                    className={styles.nav}
                    activeClassName={styles.activeLink}
                    onClick={props.visibilityCallBack}
                >
                    <SvgSelector svgName={"Music"}/>
                    <span>Music</span>
                </NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink
                    to="/news"
                    className={styles.nav}
                    activeClassName={styles.activeLink}
                    onClick={props.visibilityCallBack}
                >
                    <SvgSelector svgName={"News"}/>
                    <span>News</span>
                </NavLink>
            </div>
        </div>
    )
}