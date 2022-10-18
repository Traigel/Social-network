import React, {ChangeEvent, useState} from "react";
import styles from './ProfileInfo.module.css'
import userImg from '../../../assets/images/usersImg.png'
import {ProfileType} from "../profile-reducer";
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e: File) => void
    saveProfile: (formData: ProfileType) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmitHandler = (formData: ProfileType) => {
        // @ts-ignore
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div className={styles.profileInfo}>

            <div className={styles.ava}>
                <img alt={userImg} src={props.profile.photos.large ? props.profile.photos.large : userImg}/>
                {props.isOwner &&
                    <input
                        type={'file'}
                        onChange={onChangeInputHandler}
                    />}
            </div>

            <div className={styles.info}>
                {editMode ?
                    <ProfileDataReduxForm
                        onSubmit={onSubmitHandler}
                        initialValues={props.profile}
                        profile={props.profile}
                    />
                    :
                    <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        setEditMode={setEditMode}
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                }
            </div>
        </div>
    </div>

};