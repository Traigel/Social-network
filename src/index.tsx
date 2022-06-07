import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type ProfilePageType = {
    posts: Array<PostsType>
}
export type PostsType = {
    id?: number,
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
    id?: number,
    message: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello word', likes: 24},
            {id: 2, message: 'Yo! i`m props', likes: 56},
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
            {id: 1, message: 'Hello Word!'},
            {id: 2, message: 'I am a computer programmer'},
            {id: 3, message: 'Yo'},
        ]
    },
}

ReactDOM.render(
    <div><App state={state}/></div>,
    document.getElementById('root')
);