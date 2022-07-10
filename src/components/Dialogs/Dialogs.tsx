import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../Redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    onClickAddMessage: () => void
    onChangeAddMessage: (value: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let onChangeAddMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeAddMessage(e.currentTarget.value)
    }

    let onClickAddMessageHandler = () => {
        props.onClickAddMessage()
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