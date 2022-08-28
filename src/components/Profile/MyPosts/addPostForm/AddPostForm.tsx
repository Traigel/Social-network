import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormType = {
    newPostText: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newPostText'}
                component={'textarea'}
                placeholder={'Enter your message'}
            />
            <button>Add post</button>
        </form>
    )
}

export const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'addPostForm'})(AddPostForm)