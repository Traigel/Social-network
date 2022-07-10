import React from "react";
import {addPostAC, ProfileActionType, ProfilePageType, updateNewPostAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionType) => void
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    let updateNewPostTextHandler = (value: string) => {
        props.dispatch(updateNewPostAC(value))
    }

    return (
        <MyPosts
            profilePage={props.profilePage}
            updateNewPostText={updateNewPostTextHandler}
            addPost={addPostHandler}
        />
    )
};