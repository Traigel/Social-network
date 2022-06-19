import {v1} from "uuid";

let rerenderEntireTree = () => {

}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: string,
    message: string,
    likes: number
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
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
        ],
        newPostText: ''
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
        ],
        newMessageText: ''
    },
}

export const addPostCallBack = (newPost: string) => {
    state.profilePage.posts.unshift({id: v1(), message: newPost, likes: 0})
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostTextCallBack = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree()
}

export const addMassageCallBack = () => {
    state.dialogsPage.messagesData.push({id: v1(), message: state.dialogsPage.newMessageText})
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree()
}

export const updateNewMessageTextCallBack = (newMassageText: string) => {
    state.dialogsPage.newMessageText = newMassageText
    rerenderEntireTree()
}

export const subscribe = (observer: ()=> void) => {
    rerenderEntireTree = observer
}