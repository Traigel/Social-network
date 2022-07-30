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
export type UsersMainType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type FollowActonType = ReturnType<typeof followAC>
type UsFollowActonType = ReturnType<typeof usFollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type UsersActionType = FollowActonType | UsFollowActonType | SetUsersActionType | SetCurrentPageACType
    | SetTotalUsersCountACType | ToggleIsFetchingACType

const initialState: UsersMainType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                users: [...action.users]
            }
            case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.pageNumber
            }
            case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
            case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        default :
            return state;
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const usFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (pageNumber: number) => ({type: 'SET-CURRENT-PAGE', pageNumber} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)