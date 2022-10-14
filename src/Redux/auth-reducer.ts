import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormType} from "../components/login/loginReduxForm/LoginReduxForm";
import {stopSubmit} from "redux-form";

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: UsersActionType): AuthType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATE": {
            return {
                ...state,
                ...action.date
            }
        }
        default :
            return state;

    }
}

// actions
export const setAuthUserDateAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'AUTH/SET-USER-DATE',
    date: {id, email, login, isAuth}
} as const)

// thunks
export const setAuthUserDateTC = (): any => (dispatch: Dispatch<UsersActionType>) => {

    return authAPI.getAuth()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDateAC(res.data.data.id, res.data.data.email, res.data.data.login, true))
                }
            }
        )
}

export const loginTC = (formData: LoginFormType): any => async (dispatch: Dispatch<UsersActionType>) => {
    try {
        const res = await authAPI.login(formData.email, formData.password, formData.rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDateTC())
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            const action: any = stopSubmit('login', {_error: message})
            dispatch(action)
        }
    } catch (err) {
        console.log(err)
    }
}

export const logoutTC = (): any => async (dispatch: Dispatch<UsersActionType>) => {
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDateAC(null, null, null, false))
        }
    } catch (err) {
        console.log(err)
    }
}

// types
export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type UsersActionType = ReturnType<typeof setAuthUserDateAC>