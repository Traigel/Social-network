import {v1} from "uuid";
import {ActionType, ProfilePageType} from "./myStore";

export const profileReducer = (state: ProfilePageType, action: ActionType) => {

    switch (action.type) {
        case 'ADD-POST':
            state.posts.unshift({id: v1(), message: state.newPostText, likes: 0})
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default :
            return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}