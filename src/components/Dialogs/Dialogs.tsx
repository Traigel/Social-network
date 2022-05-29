import React from "react";
import s from './Dialogs.module.css'
import {DialogName} from "./DialogName/DialogName";
import { Message } from "./Message/Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Vladimir' },
        {id: 2, name: 'Alex' },
        {id: 3, name: 'Dima' },
        {id: 4, name: 'Vasa' },
        {id: 5, name: 'Masha' },
    ]
    let messagesData = [
        {id: 1, message:'Hello Word!'},
        {id: 2, message:'I am a computer programmer'},
        {id: 3, message:'Yo'},
    ]

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsData.map( u => <DialogName key={u.id} name={u.name} id={u.id}/> )}
        </div>
        <div className={s.messages}>
            {messagesData.map( u => <Message key={u.id} message={u.message}/> )}
        </div>
    </div>
};