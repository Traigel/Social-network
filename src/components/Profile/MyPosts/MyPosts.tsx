import React, {ChangeEvent} from "react";
import {ProfilePageType} from "../../../Redux/myState";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPostCallBack: () => void
    updateNewPostTextCallBack: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let onChangeAddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallBack(e.currentTarget.value)
    }

    let onclickAddPostHandler = () => {
        props.addPostCallBack()
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