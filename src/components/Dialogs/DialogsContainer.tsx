import React from "react";
import {addMessagesAC, DialogsActionType, DialogsPageType, updateNewMessagesAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: DialogsActionType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let onChangeAddMessageHandler = (value: string) => {
        props.dispatch(updateNewMessagesAC(value))
    }

    let onClickAddMessageHandler = () => {
        props.dispatch(addMessagesAC())
    }

    return (
        <Dialogs
            dialogsPage={props.dialogsPage}
            onChangeAddMessage={onChangeAddMessageHandler}
            onClickAddMessage={onClickAddMessageHandler}
        />
    )
};