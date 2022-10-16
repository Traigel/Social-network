import styles from "./ProfileData.module.css";
import React from "react";
import {ProfileType} from "../../../../Redux/profile-reducer";
import {ProfileStatusWithHooks} from "../profileStatus/ProfileStatusWithHooks";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    setEditMode: (value: boolean) => void
    status: string
    updateStatus: (status: string) => void
}

export const ProfileData = (props: ProfileDataPropsType) => {

    const settingsHandler = () => {
        props.setEditMode(true)
    }

    return (
        <div>
            {props.isOwner && <div onClick={settingsHandler}>Settings</div>}
            <h1 className={styles.name}>{props.profile.fullName}</h1>
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}
            />

            <div>
                <h4 className={styles.aboutMe}>About me:</h4>
                {props.profile.aboutMe ? ' ' + props.profile.aboutMe : '...'}
            </div>

            <div>
                {props.profile.lookingForAJob ? <h4 className={styles.job}>Looking for a job: </h4> : ''}
                <span> {props.profile.lookingForAJobDescription}</span>
            </div>
            <div className={styles.contacts}>
                <h4>Contacts:</h4>
                <span>
                {props.profile.contacts.facebook ? 'Facebook: ' + props.profile.contacts.facebook : ''}
            </span>
                <span>
                {props.profile.contacts.website ? 'Website: ' + props.profile.contacts.website : ''}
            </span>
                <span>
                {props.profile.contacts.vk ? 'VK: ' + props.profile.contacts.vk : ''}
            </span>
                <span>
                {props.profile.contacts.twitter ? 'Twitter: ' + props.profile.contacts.twitter : ''}
            </span>
                <span>
                {props.profile.contacts.instagram ? 'Instagram: ' + props.profile.contacts.instagram : ''}
            </span>
                <span>
                {props.profile.contacts.youtube ? 'YouTube: ' + props.profile.contacts.youtube : ''}
            </span>
                <span>
                {props.profile.contacts.github ? 'GitHub: ' + props.profile.contacts.github : ''}
            </span>
                <span>
                {props.profile.contacts.mainLink ? 'MainLink: ' + props.profile.contacts.mainLink : ''}
            </span>
            </div>
        </div>

    )
}