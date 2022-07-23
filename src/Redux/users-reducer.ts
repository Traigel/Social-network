import {v1} from "uuid";

type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
//export type UsersMainType = typeof initialState
export type UsersMainType = {
    users: UsersType[]
}

type FollowActonType = ReturnType<typeof followAC>
type UsFollowActonType = ReturnType<typeof usFollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type UsersActionType = FollowActonType | UsFollowActonType | SetUsersActionType

const initialState: UsersMainType = {
    users: []
}

export const usersReducer = (state: UsersMainType = initialState, action: UsersActionType): UsersMainType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default :
            return state;
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const usFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)