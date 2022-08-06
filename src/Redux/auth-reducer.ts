export type AuthType = {
    id: string | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}

type SetAuthUserDateACType = ReturnType<typeof setAuthUserDateAC>

type UsersActionType = SetAuthUserDateACType

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: UsersActionType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATE":
            return {
                ...state,
                ...action.date,
                isAuth: true
            }

        default :
            return state;
    }
}

export const setAuthUserDateAC = (date: AuthType) => ({type: 'SET-USER-DATE', date} as const)
