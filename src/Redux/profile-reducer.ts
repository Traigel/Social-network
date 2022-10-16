import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AddPostFormType} from "../components/Profile/MyPosts/addPostForm/AddPostForm";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hello word', likes: 24},
        {id: v1(), message: 'Yo! i`m props', likes: 56},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), message: action.formData.newPostText, likes: 0}, ...state.posts]
            };
        case 'PROFILE/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'PROFILE/SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            };
        case "PROFILE/DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id)
            }
        case "PROFILE/SAVE-PHOTO-SUCCESS":
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.data}}
        default :
            return state;
    }
}

// actions
export const addPostAC = (formData: AddPostFormType) => ({type: 'PROFILE/ADD-POST', formData} as const)

export const setUserProfileAC = (profile: ProfileType) => ({type: 'PROFILE/SET-USER-PROFILE', profile} as const)

export const setUserStatusAC = (status: string) => ({type: 'PROFILE/SET-USER-STATUS', status} as const)

export const deletePostAC = (id: string) => ({type: 'PROFILE/DELETE-POST', id} as const)

export const savePhotoSuccessAC = (data: PhotosType) => ({type: 'PROFILE/SAVE-PHOTO-SUCCESS', data} as const)

// thunks
export const getUserProfileTC = (userID: string): any => async (dispatch: Dispatch<ProfileActionType>) => {
    try {
        const res = await profileAPI.getProfile(userID)
        dispatch(setUserProfileAC(res.data))
    } catch (err) {
        console.log(err)
    }
}


export const getUserStatusTC = (userID: string): any => async (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getStatus(userID)
        .then(res => {
            dispatch(setUserStatusAC(res.data))
        })
}

export const updateStatusTC = (status: string): any => async (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.putStatus(status)
        .then(res => {
            dispatch(setUserStatusAC(status))
        })
        .catch(rej => {
            console.error(rej.data.messages)
        })
}

export const savePhotoTC = (file: File): any => async (dispatch: Dispatch<ProfileActionType>, getState: () => AppStateType) => {
    const userId = getState().auth.id + ''
    try {
        const res = await profileAPI.savePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId))
        }
    } catch (err) {
        console.error(err)
    }
}

export const saveProfileTC = (formData: ProfileType): any => async (dispatch: Dispatch<ProfileActionType>, getState: () => AppStateType) => {
    const userId = getState().auth.id + ''
    try {
        const res = await profileAPI.saveProfile(formData)
        if (res.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId))
        } else {
            const action: any = stopSubmit('profileData', {_error: res.data.messages[0]})
            dispatch(action)
            // const action: any = stopSubmit('profileData', {'contacts': {'facebook': res.data.messages[0]}})
            return Promise.reject(res.data.messages[0])
        }
    } catch (err) {
        console.error(err)
    }
}

// types
export type PostsType = {
    id: string,
    message: string,
    likes: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
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
    profile: ProfileType | null
    status: string
}

export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccessAC>