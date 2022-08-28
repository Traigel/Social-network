import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    placeholder={'Email'}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={Input}
                    type={'password'}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    type={"checkbox"}
                    component={Input}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)