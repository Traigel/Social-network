import React from "react";
import s from './Profile.module.css'
import imgProfile from '../../assets/images/imagesProfile.jpg'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img alt={'imgProfile'} src={imgProfile}/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
};