import {v1} from "uuid";

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

type AddActionType = {
    type: 'ADD-POST' | 'ADD-MESSAGE'
}
type UpdateNewActionType = {
    type: 'UPDATE-NEW-POST-TEXT' | 'UPDATE-NEW-MESSAGE'
    newText: string
}
export type ActionType = AddActionType | UpdateNewActionType

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
    // addPostCallBack: () => void
    // updateNewPostTextCallBack: (newPostText: string) => void
    // addMassageCallBack: () => void
    // updateNewMessageTextCallBack: (newMassageText: string) => void
}

export let store: StoreType = {
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
        if (action.type === 'ADD-POST') {
            this._state.profilePage.posts.unshift({id: v1(), message: this._state.profilePage.newPostText, likes: 0})
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            this._state.dialogsPage.messagesData.push({id: v1(), message: this._state.dialogsPage.newMessageText})
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    },

    // addPostCallBack() {
    //     this._state.profilePage.posts.unshift({id: v1(), message: this._state.profilePage.newPostText, likes: 0})
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostTextCallBack(newPostText: string) {
    //     this._state.profilePage.newPostText = newPostText
    //     this._callSubscriber()
    // },
    // addMassageCallBack() {
    //     this._state.dialogsPage.messagesData.push({id: v1(), message: this._state.dialogsPage.newMessageText})
    //     this._state.dialogsPage.newMessageText = ''
    //     this._callSubscriber()
    // },
    // updateNewMessageTextCallBack(newMassageText: string) {
    //     this._state.dialogsPage.newMessageText = newMassageText
    //     this._callSubscriber()
    // },
}