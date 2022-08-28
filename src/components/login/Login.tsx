import React from "react";
import {LoginFormType, LoginReduxForm} from "./loginReduxForm/LoginReduxForm";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {loginTC} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";

const Login = (props: LoginPropsType) => {

    const onSubmitHandler = (formData: LoginFormType) => {
        props.login(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </div>
};

export type LoginPropsType = mapDispatchToPropsType & mapStatePropsType

type mapStatePropsType = {
    isAuth: boolean
}

type mapDispatchToPropsType = {
    login: (formData: LoginFormType) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        login: (formData: LoginFormType) => dispatch(loginTC(formData))
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)