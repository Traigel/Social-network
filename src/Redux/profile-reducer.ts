import {v1} from "uuid";
import {Dispatch} from "redux";
import {followAPI, profileAPI} from "../api/api";
import {toggleFollowingProgressAC, usFollowAC} from "./users-reducer";

export type PostsType = {
    id: string,
    message: string,
    likes: number
}
type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type ProfileActionType = AddPostActionType | UpdateNewPostActionType | SetUserProfileACType

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello word', likes: 24},
        {id: v1(), message: 'Yo! i`m props', likes: 56},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), message: state.newPostText, likes: 0}, ...state.posts],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
            case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };

        default :
            return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)

export const getUserProfileTC = (userID: string): any => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.getUserID(userID)
            .then(response => {
                    dispatch(setUserProfileAC(response.data))
                }
            )
    }
}
