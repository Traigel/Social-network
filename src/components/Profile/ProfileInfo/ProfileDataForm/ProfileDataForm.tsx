import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/formControls/FormsControls";
import {ProfileType} from "../../../../Redux/profile-reducer";
import styles from "./ProfileDataForm.module.css";

// type ProfileDataFormPropsType = {
//     profile: ProfileType
// }

export const ProfileDataForm = (props: InjectedFormProps<ProfileType>) => {

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
            <div>
                <b>Facebook: </b>
                <Field
                    name={'contacts.facebook'}
                    placeholder={'facebook'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>Website: </b>
                <Field
                    name={'contacts.website'}
                    placeholder={'website'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>VK: </b>
                <Field
                    name={'contacts.VK'}
                    placeholder={'VK'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>Twitter: </b>
                <Field
                    name={'contacts.twitter'}
                    placeholder={'twitter'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>Instagram: </b>
                <Field
                    name={'contacts.instagram'}
                    placeholder={'instagram'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>YouTube: </b>
                <Field
                    name={'contacts.youtube'}
                    placeholder={'youtube'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>GitHub: </b>
                <Field
                    name={'contacts.github'}
                    placeholder={'github'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            <div>
                <b>MainLink: </b>
                <Field
                    name={'contacts.mainLink'}
                    placeholder={'mainLink'}
                    component={Input}
                    type={'text'}
                    validate={[]}
                />
            </div>
            {props.error && <div className={styles.formSummeryError}>{props.error}</div>}
            <button>Save</button>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<ProfileType>({form: 'profileData'})(ProfileDataForm)