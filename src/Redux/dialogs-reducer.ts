import {v1} from "uuid";

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
type UpdateNewMessagesActionType = ReturnType<typeof updateNewMessagesAC>
type DialogsActionType = AddMessagesActionType | UpdateNewMessagesActionType

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
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: state.newMessageText}],
                newMessageText: ''
            };
        case 'UPDATE-NEW-MESSAGE':
            return {
                ...state,
                newMessageText: action.newText
            };
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