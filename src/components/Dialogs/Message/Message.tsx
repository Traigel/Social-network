import React from "react";
import s from './Message.module.css'
import {MessagesDataType} from "../../../index";

export const Message = (props: MessagesDataType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}