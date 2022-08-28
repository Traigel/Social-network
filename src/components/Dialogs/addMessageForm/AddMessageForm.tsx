import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormType = {
    newMessageText: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <Field
              component={'textarea'}
              name={'newMessageText'}
              placeholder={'Enter your message'}
          />
          <button>Message</button>
      </form>
  )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'addMessageForm'})(AddMessageForm)