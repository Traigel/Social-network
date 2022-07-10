import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/profile-reducer";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    updateNewPostText: (value: string) => void
    addPost: ()=> void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let onclickAddPostHandler = () => {
        props.addPost()
    }

    let onChangeAddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return <div className={style.myPosts}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea value={props.profilePage.newPostText}
                          onChange={onChangeAddPostHandler}></textarea>
            </div>
            <div>
                <button onClick={onclickAddPostHandler}>Add post</button>
            </div>
        </div>
        {props.profilePage.posts.map( u => <Post key={u.id} message={u.message} likes={u.likes} id={u.id}/>)}
    </div>
};