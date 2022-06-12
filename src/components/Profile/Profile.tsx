import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../Redux/myState";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallBack: (newMessage: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 addPostCallBack={props.addPostCallBack}/>
    </div>
};