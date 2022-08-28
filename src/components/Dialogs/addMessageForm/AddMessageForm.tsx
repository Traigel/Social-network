import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

export type AddMessageFormType = {
    newMessageText: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <Field
              component={Textarea}
              name={'newMessageText'}
              placeholder={'Enter your message'}
              validate={[requiredField, maxLength100]}
          />
          <button>Message</button>
      </form>
  )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'addMessageForm'})(AddMessageForm)