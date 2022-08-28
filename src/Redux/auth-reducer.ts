import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormType} from "../components/login/loginReduxForm/LoginReduxForm";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type SetAuthUserDateACType = ReturnType<typeof setAuthUserDateAC>

type UsersActionType = SetAuthUserDateACType

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: UsersActionType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATE": {
            return {
                ...state,
                ...action.date
            }
        }
        default :
            return state;

    }
}

const setAuthUserDateAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATE',
    date: {id, email, login, isAuth}
} as const)

export const setAuthUserDateTC = (): any => (dispatch: Dispatch<UsersActionType>) => {

    authAPI.getAuth()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDateAC(res.data.data.id, res.data.data.email, res.data.data.login, true))
                }
            }
        )
}

export const loginTC = (formData: LoginFormType): any => (dispatch: Dispatch<UsersActionType>) => {
    authAPI.login(formData.email, formData.password, formData.rememberMe)
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDateTC())
                }
            }
        )
}

export const logoutTC = (): any => (dispatch: Dispatch<UsersActionType>) => {
    authAPI.logout()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDateAC(null, null, null, false))
                }
            }
        )
}