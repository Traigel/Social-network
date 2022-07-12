import {v1} from "uuid";
import {addPostAC, profileReducer, updateNewPostAC} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {addMessagesAC, updateNewMessagesAC, dialogsReducer} from "./dialogs-reducer";

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type PostsType = {
    id: string,
    message: string,
    likes: number
}

type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}
type DialogsDataType = {
    id: string,
    name: string
}
type MessagesDataType = {
    id: string,
    message: string
}

type SidebarType = {
    id: string,
    name: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
type AddMessagesActionType = ReturnType<typeof addMessagesAC>
type UpdateNewMessagesActionType = ReturnType<typeof updateNewMessagesAC>
type ActionType =
    AddPostActionType
    | UpdateNewPostActionType
    | AddMessagesActionType
    | UpdateNewMessagesActionType

type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
    sidebar: Array<SidebarType>
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hello word', likes: 24},
                {id: v1(), message: 'Yo! i`m props', likes: 56},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: v1(), name: 'Vladimir'},
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Vasa'},
            {id: v1(), name: 'Masha'},
        ]
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        //
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        //
        // this._callSubscriber()
    },
}


