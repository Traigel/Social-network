import {v1} from "uuid";
import {ActionType, DialogsPageType} from "./myStore";

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

    if (action.type === 'ADD-MESSAGE') {
        state.messagesData.push({id: v1(), message: state.newMessageText})
        state.newMessageText = ''
    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
        state.newMessageText = action.newText
    }

    return (
        state
    )
}

export const addMessagesAC = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessagesAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newText: newText
    } as const
}