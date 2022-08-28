import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, AddMessageFormType} from "./addMessageForm/AddMessageForm";

export const Dialogs = (props: DialogsPropsType) => {

    const addNewMessage = (formData: AddMessageFormType) => {
        props.addMessages(formData)
    }

    return <div className={style.dialogs}>
        <div className={style.dialogsItem}>
            {props.dialogsPage.dialogsData.map(u => <DialogItem key={u.id} name={u.name} id={u.id}/>)}
        </div>
        <div className={style.messages}>
            {props.dialogsPage.messagesData.map(u => <Message key={u.id} message={u.message} id={u.id}/>)}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
};