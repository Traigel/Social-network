import {v1} from "uuid";
import {AddMessageFormType} from "../components/Dialogs/addMessageForm/AddMessageForm";

export type DialogsDataType = {
    id: string,
    name: string
}
export type MessagesDataType = {
    id: string,
    message: string
}

export type DialogsPageType = typeof initialState

type AddMessagesActionType = ReturnType<typeof addMessagesAC>
type DialogsActionType = AddMessagesActionType

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Vasa'},
        {id: v1(), name: 'Masha'},
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: v1(), message: 'Hello Word!'},
        {id: v1(), message: 'I am a computer programmer'},
        {id: v1(), message: 'Yo'},
    ] as Array<MessagesDataType>,
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: action.formData.newMessageText}]
            };
        default :
            return state;
    }
}

export const addMessagesAC = (formData: AddMessageFormType) => {
    return {type: 'ADD-MESSAGE', formData} as const
}
