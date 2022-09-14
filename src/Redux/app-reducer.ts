import { Dispatch } from "redux";
import {setAuthUserDateTC} from "./auth-reducer";


const initialState: AppReducerType = {
    initialized: false
}

export const AppReducer = (state: AppReducerType = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case "APP/SET-INITIALIZED": {
            return {...state, initialized: true}
        }
        default :
            return state;

    }
}

//action
const setInitializedAC = () => ({type: 'APP/SET-INITIALIZED'} as const)

//thunks
export const setInitializedAppTC = (): any => (dispatch: Dispatch) => {
    const promise = dispatch(setAuthUserDateTC())
    promise.then((res: any) => {
        dispatch(setInitializedAC())
        })

}

//type
export type AppReducerType = {
    initialized: boolean
}

type SetInitializedType = ReturnType<typeof setInitializedAC>

type AppActionType = SetInitializedType



