import React from "react";
import {addPostAC, ProfilePageType} from "../profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/redux-store";
import {Dispatch} from "redux";
import {AddPostFormType} from "./addPostForm/AddPostForm";

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    profilePage: ProfilePageType
}

type mapDispatchPropsType = {
    addPost: (formData: AddPostFormType) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (formData: AddPostFormType) => dispatch(addPostAC(formData))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)