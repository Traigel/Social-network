import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

export const Messages = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            <div className={s.dialog}>
               <NavLink to='/messages/1' activeClassName={s.activeLink}>Vladimir</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/messages/2' activeClassName={s.activeLink}>Alex</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/messages/3' activeClassName={s.activeLink}>Dima</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/messages/4' activeClassName={s.activeLink}>Peta</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/messages/5' activeClassName={s.activeLink}>Lubava</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>
                Hello Word!
            </div>
            <div className={s.message}>
                I am a computer programmer
            </div>
        </div>
    </div>
};