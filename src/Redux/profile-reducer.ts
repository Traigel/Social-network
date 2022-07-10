import {v1} from "uuid";

export type PostsType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
export type ProfileActionType = AddPostActionType | UpdateNewPostActionType

const initialState: ProfilePageType = {
        posts: [
            {id: v1(), message: 'Hello word', likes: 24},
            {id: v1(), message: 'Yo! i`m props', likes: 56},
        ],
        newPostText: ''
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
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