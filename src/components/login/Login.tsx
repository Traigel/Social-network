import React from "react";
import {LoginFormType, LoginReduxForm} from "./loginReduxForm/LoginReduxForm";

export const Login = () => {

    const onSubmitHandler = (formData: LoginFormType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </div>
};