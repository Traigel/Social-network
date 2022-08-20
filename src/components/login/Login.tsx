import React from "react";
import {reduxForm} from "redux-form";

const LoginForm = () => {
    return (
        <form>
            <div>
                <Field placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'}/>
            </div>
            <div>
                <Field type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>
};