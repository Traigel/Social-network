import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginFormType = {
    login: string
    password: string
    rememberMe: string
}

const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={"checkbox"} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmitHandler = (formData: LoginFormType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </div>
};