import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import {DialogsPageType} from "../../index";

type DialogsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsType) => {

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {props.dialogsPage.dialogsData.map( u => <DialogItem key={u.id} name={u.name} id={u.id}/> )}
        </div>
        <div className={s.messages}>
            {props.dialogsPage.messagesData.map( u => <Message key={u.id} message={u.message}/> )}
        </div>
    </div>
};