import React from "react";
import styles from './ProfileInfo.module.css'
import imgProfile from '../../../assets/images/imagesProfile.jpg'
import userImg from '../../../assets/images/usersImg.jpg'
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <img alt={'imgProfile'} src={imgProfile}/>
        <div>
            <img alt={userImg} src={props.profile.photos.large ? props.profile.photos.large: userImg}/>
            ava + description
        </div>
    </div>
};