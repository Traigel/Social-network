import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPageType } from "../../Redux/myState";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    let onClickMessageHandler = () => {

    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {props.dialogsPage.dialogsData.map( u => <DialogItem key={u.id} name={u.name} id={u.id}/> )}
        </div>
        <div className={s.messages}>
            {props.dialogsPage.messagesData.map( u => <Message key={u.id} message={u.message} id={u.id}/> )}
            <input onChange={onChangeMessageHandler}/>
            <button onClick={onClickMessageHandler}>Message</button>
        </div>
    </div>
};