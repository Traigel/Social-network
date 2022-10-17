import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import styles from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onKeyPressHandler = (el: KeyboardEvent<HTMLInputElement>) => {
        if (el.key === 'Enter') deactivateEditMode()
    }

    const onChangeHandler = (el: ChangeEvent<HTMLInputElement>) => setStatus(el.currentTarget.value)

    return (
        <div className={styles.status}>
            {!editMode

                ? <span
                    onDoubleClick={activateEditMode}
                > &#9998; {props.status ? props.status : '...'}</span>

                : <input
                    value={status}
                    onChange={onChangeHandler}
                    onBlur={deactivateEditMode}
                    onKeyPress={onKeyPressHandler}
                    autoFocus={true}
                />
            }

        </div>
    )
}