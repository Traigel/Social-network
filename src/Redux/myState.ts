import {v1} from "uuid";

export type ProfilePageType = {
    posts: Array<PostsType>
}
export type PostsType = {
    id: string,
    message: string,
    likes: number
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type MessagesDataType = {
    id: string,
    message: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hello word', likes: 24},
            {id: v1(), message: 'Yo! i`m props', likes: 56},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Vladimir'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Vasa'},
            {id: 5, name: 'Masha'},
        ],
        messagesData: [
            {id: v1(), message: 'Hello Word!'},
            {id: v1(), message: 'I am a computer programmer'},
            {id: v1(), message: 'Yo'},
        ]
    },
}