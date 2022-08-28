import React from "react";
import style from './MyPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import {AddPostFormRedux, AddPostFormType} from "./addPostForm/AddPostForm";

export const MyPosts = (props: MyPostsPropsType) => {

    const addNewPost = (formData: AddPostFormType) => {
        props.addPost(formData)
    }

    return <div className={style.myPosts}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addNewPost}/>
        {props.profilePage.posts.map(u => <Post key={u.id} message={u.message} likes={u.likes} id={u.id}/>)}
    </div>
};