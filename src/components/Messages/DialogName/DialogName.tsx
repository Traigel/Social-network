import React from "react";
import s from './DialogName.module.css'
import {NavLink} from "react-router-dom";

type DialogNameType = {
    id: number,
    name: string
}

export const DialogName = (props: DialogNameType) => {
    return <div className={s.dialog}>
        <NavLink to={'/messages/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}