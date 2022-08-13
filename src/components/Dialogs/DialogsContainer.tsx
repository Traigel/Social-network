import React from "react";
import {addMessagesAC, DialogsPageType, updateNewMessagesAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type mapDispatchPropsType = {
    updateNewMessages: (value: string) => void
    addMessages: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessages: (value: string) => dispatch(updateNewMessagesAC(value)),
        addMessages: () => dispatch(addMessagesAC())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);