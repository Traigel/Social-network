import React from "react";
import { MessagesDataType } from "../dialogs-reducer";
import s from './Message.module.css'

export const Message = (props: MessagesDataType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}