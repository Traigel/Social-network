import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../Redux/myState";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallBack: () => void
    updateNewPostTextCallBack: (newPostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 addPostCallBack={props.addPostCallBack}
                 updateNewPostTextCallBack={props.updateNewPostTextCallBack}/>
    </div>
};