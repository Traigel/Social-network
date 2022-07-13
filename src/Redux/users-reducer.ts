import {v1} from "uuid";

type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type UsersMainType = typeof initialState

type FollowActonType = ReturnType<typeof followAC>
type UsFollowActonType = ReturnType<typeof usFollowAC>
type UsersActionType = FollowActonType | UsFollowActonType

const initialState = {
    users: [
        {id: v1(), followed: true, name: 'Vladimir', status: 'I am a boss', location: {city: 'Grodno', country: 'Belarus'}},
        {id: v1(), followed: true, name: 'Alex', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: v1(), followed: false, name: 'Evgenii', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, name: 'Viktoria', status: 'I am a boss', location: {city: 'Ural', country: 'Russia'}},
        {id: v1(), followed: true, name: 'Sergey', status: 'I am a boss', location: {city: 'SPB', country: 'Russia'}},
        {id: v1(), followed: false, name: 'Oskar', status: 'I am a boss', location: {city: 'Astata', country: 'Kazahstan'}},
    ] as Array<UsersType>,
}

export const usersReducer = (state: UsersMainType = initialState, action: UsersActionType) => {
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
        default :
            return state;
    }
}

export const followAC = (userID: string) => ({type: 'FOLLOW', userID} as const)
export const usFollowAC = (userID: string) => ({type: 'UNFOLLOW', userID} as const)