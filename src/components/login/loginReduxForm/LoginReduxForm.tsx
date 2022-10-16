import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import styles from '../../common/formControls/FormsControls.module.css'

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

type LoginFormPropsType = {
    captchaUrl: string
}

const LoginForm = (props: InjectedFormProps<LoginFormType, LoginFormPropsType> & LoginFormPropsType) => {
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
            {props.captchaUrl && <img src={props.captchaUrl} alt={'captchaUrl'}/>}
            {props.captchaUrl &&  <div>
                <Field
                    name={'captcha'}
                    placeholder={'Captcha'}
                    component={Input}
                    type={'text'}
                    validate={[requiredField]}
                />
            </div>}
            {props.error && <div className={styles.formSummeryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormType, LoginFormPropsType>({form: 'login'})(LoginForm)