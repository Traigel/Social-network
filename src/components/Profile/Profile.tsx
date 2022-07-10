import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileActionType, ProfilePageType} from "../../Redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPostsContainer
            profilePage={props.profilePage}
            dispatch={props.dispatch}
        />
    </div>
};