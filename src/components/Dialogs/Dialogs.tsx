import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import {ActionType, DialogsPageType} from "../../Redux/myState";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let onChangeAddMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type: 'UPDATE-NEW-MESSAGE' , newText: e.currentTarget.value})
    }

    let onClickAddMessageHandler = () => {
    props.dispatch({type: 'ADD-MESSAGE'})
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {props.dialogsPage.dialogsData.map( u => <DialogItem key={u.id} name={u.name} id={u.id}/> )}
        </div>
        <div className={s.messages}>
            {props.dialogsPage.messagesData.map( u => <Message key={u.id} message={u.message} id={u.id}/> )}
            <input value={props.dialogsPage.newMessageText}
                   onChange={onChangeAddMessageHandler}/>
            <button onClick={onClickAddMessageHandler}>Message</button>
        </div>
    </div>
};