import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../common/utils/validators/validators";
import {Textarea} from "../../../../common/components/formControls/FormsControls";

const maxLength150 = maxLengthCreator(150)

export type AddPostFormType = {
    newPostText: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newPostText'}
                component={Textarea}
                placeholder={'Enter your message'}
                validate={[requiredField, maxLength150]}
            />
            <button>Add post</button>
        </form>
    )
}

export const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'addPostForm'})(AddPostForm)