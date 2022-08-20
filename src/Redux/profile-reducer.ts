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
    status: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export type ProfileActionType = AddPostActionType | UpdateNewPostActionType | SetUserProfileACType | SetUserStatusACType

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello word', likes: 24},
        {id: v1(), message: 'Yo! i`m props', likes: 56},
    ],
    newPostText: '',
    profile: null,
    status: ''
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
            case 'SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            };

        default :
            return state;
    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserStatusAC = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

export const getUserProfileTC = (userID: string): any => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.getProfile(userID)
            .then(response => {
                    dispatch(setUserProfileAC(response.data))
                }
            )
    }
}

export const getUserStatusTC = (userID: string): any => async (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getStatus(userID)
        .then( res => {
            dispatch(setUserStatusAC(res.data))
        })
}

export const updateStatusTC = (status: string): any => async (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.putStatus(status)
        .then( res => {
            dispatch(setUserStatusAC(status))
        })
        .catch( rej => {
            console.error(rej.data.messages)
        })
}
