import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../../common/components/formControls/FormsControls";
import {ProfileType} from "../../profile-reducer";
import styles from "./ProfileDataForm.module.css";

type ProfileDataFormPropsType = {
    profile: ProfileType
}

export const ProfileDataForm = (props: InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <b>Full name: </b>
                <Field
                    name={'fullName'}
                    placeholder={'Full Name'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>About me: </b>
                <Field
                    name={'aboutMe'}
                    placeholder={'About me'}
                    component={Textarea}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>Looking for a job: </b>
                <Field
                    name={'lookingForAJob'}
                    component={Input}
                    type={'checkbox'}
                    validate={[]}
                />
                <Field
                    name={'lookingForAJobDescription'}
                    placeholder={'My professional skills'}
                    component={Textarea}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <h4>Contacts:</h4>
            {Object.keys(props.profile.contacts).map(key => {
                return <div>
                    <b>{key}</b>
                    <Field
                        name={'contacts.' + key}
                        placeholder={key}
                        component={Input}
                        type={'text'}
                        validate={[]}
                    />
                </div>
            })}
            {props.error && <div className={styles.formSummeryError}>{props.error}</div>}
            <button>Save</button>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'profileData'})(ProfileDataForm)