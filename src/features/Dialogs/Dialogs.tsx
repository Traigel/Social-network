import React from "react";
import styles from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, AddMessageFormType} from "./addMessageForm/AddMessageForm";
import {RepairComponent} from "../../common/components/RepairComponent/RepairComponent";

export const Dialogs = (props: DialogsPropsType) => {

    const addNewMessage = (formData: AddMessageFormType) => {
        props.addMessages(formData)
    }

    return <div className={styles.dialogsComponent}>
        <div className={styles.dialogsItem}>
            <div className={styles.repairBox}>
                <RepairComponent text={'This page is under development. Functions are not available.'}/>
            </div>
            {props.dialogsPage.dialogsData.map(u => <DialogItem key={u.id} name={u.name} id={u.id}/>)}
        </div>
        <div className={styles.messages}>
            <div>
                Hello friend, you have a great social network.
            </div>
            {props.dialogsPage.messagesData.map(u => <Message key={u.id} message={u.message} id={u.id}/>)}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
};