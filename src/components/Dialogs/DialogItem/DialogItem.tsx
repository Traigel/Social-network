import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import { DialogsDataType } from "../../../Redux/myStore";

export const DialogItem = (props: DialogsDataType) => {
    return <div className={s.dialog}>
        <NavLink to={'/messages/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}