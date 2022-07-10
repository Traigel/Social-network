import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileActionType, ProfilePageType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 dispatch={props.dispatch}/>
    </div>
};