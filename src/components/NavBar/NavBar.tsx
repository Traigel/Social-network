import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return <nav className={s.navBar}>
        <div className={s.item}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/messages">Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users">Users</NavLink>
        </div>
    </nav>
};