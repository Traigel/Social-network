import React from "react";
import s from './ProfileInfo.module.css'
import imgProfile from '../../../assets/images/imagesProfile.jpg'

export const ProfileInfo = () => {
    return <div>
        <img alt={'imgProfile'} src={imgProfile}/>
        <div>
            ava + description
        </div>
    </div>
};