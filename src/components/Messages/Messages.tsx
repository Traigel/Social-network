import React from "react";
import s from './Messages.module.css'
import {DialogName} from "./DialogName/DialogName";
import { Message } from "./Message/Message";

export const Messages = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            <DialogName name={'Vladimir'} id={1}/>
            <DialogName name={'Alex'} id={2}/>
            <DialogName name={'Dima'} id={3}/>
            <DialogName name={'Vasa'} id={4}/>
            <DialogName name={'Masha'} id={5}/>
        </div>
        <div className={s.messages}>
            <Message message={'Hello Word!'}/>
            <Message message={'I am a computer programmer'}/>
        </div>
    </div>
};