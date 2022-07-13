import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    let onChangeAddMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessages(e.currentTarget.value)
    }

    let onClickAddMessageHandler = () => {
        props.addMessages()
    }

    return <div className={style.dialogs}>
        <div className={style.dialogsItem}>
            {props.dialogsPage.dialogsData.map(u => <DialogItem key={u.id} name={u.name} id={u.id}/>)}
        </div>
        <div className={style.messages}>
            {props.dialogsPage.messagesData.map(u => <Message key={u.id} message={u.message} id={u.id}/>)}
            <input value={props.dialogsPage.newMessageText}
                   onChange={onChangeAddMessageHandler}/>
            <button onClick={onClickAddMessageHandler}>Message</button>
        </div>
    </div>
};