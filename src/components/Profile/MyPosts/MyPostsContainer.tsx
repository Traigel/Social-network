import React from "react";
import {addPostAC, ProfilePageType, updateNewPostAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    profilePage: ProfilePageType
}

type mapDispatchPropsType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewPostText: (value: string) => dispatch(updateNewPostAC(value)),
        addPost: () => dispatch(addPostAC())
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)