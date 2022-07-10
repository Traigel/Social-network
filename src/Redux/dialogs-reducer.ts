import {v1} from "uuid";

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}
export type DialogsDataType = {
    id: string,
    name: string
}
export type MessagesDataType = {
    id: string,
    message: string
}

type AddMessagesActionType = ReturnType<typeof addMessagesAC>
type UpdateNewMessagesActionType = ReturnType<typeof updateNewMessagesAC>
export type DialogsActionType = AddMessagesActionType | UpdateNewMessagesActionType

const initialState: DialogsPageType = {
    dialogsData: [
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Vasa'},
        {id: v1(), name: 'Masha'},
    ],
    messagesData: [
        {id: v1(), message: 'Hello Word!'},
        {id: v1(), message: 'I am a computer programmer'},
        {id: v1(), message: 'Yo'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messagesData.push({id: v1(), message: state.newMessageText})
            state.newMessageText = ''
            return state;
        case 'UPDATE-NEW-MESSAGE':
            state.newMessageText = action.newText
            return state;
        default :
            return state;
    }
}

export const addMessagesAC = () => ({type: 'ADD-MESSAGE'} as const)

export const updateNewMessagesAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newText: newText
    } as const
}