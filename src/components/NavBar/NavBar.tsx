import React from "react";
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {FriendsPage} from "../../Redux/myState";

type NavBarPropsType = {
    friendsPage: Array<FriendsPage>
}

export const NavBar = (props: NavBarPropsType) => {
    return <nav className={style.navBar}>
        <div className={style.item}>
            <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/messages" activeClassName={style.activeLink}>Messages</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
        </div>
        <div className={style.friends}>
            <h3 className={style.item}>
                <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
            </h3>
            {props.friendsPage.map(el => <div className={style.friendsItem} key={el.id}>
                <img alt={'ava'}
                     src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
                <div>{el.name}</div>
            </div>)}
        </div>
    </nav>
};