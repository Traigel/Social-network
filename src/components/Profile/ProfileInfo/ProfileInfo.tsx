import React from "react";
import styles from './ProfileInfo.module.css'
import imgProfile from '../../../assets/images/imagesProfile.jpg'
import userImg from '../../../assets/images/usersImg.jpg'
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={styles.profileInfo}>

            <div className={styles.ava}>
                <img alt={userImg} src={props.profile.photos.large ? props.profile.photos.large : userImg}/>
            </div>

            <div className={styles.info}>

                <h1 className={styles.name}>{props.profile.fullName}</h1>
                <ProfileStatus
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
        </div>
    </div>

};