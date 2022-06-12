import React, {ChangeEvent} from "react";
import { PostsType } from "../../../Redux/myState";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPostCallBack: (newMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let newPosts = ''
    let onChangeAddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newPosts = e.currentTarget.value
    }

    let onclickAddPostHandler = () => {
        props.addPostCallBack(newPosts)
    }

    return <div className={style.myPosts}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onChangeAddPostHandler}></textarea>
            </div>
            <div>
                <button onClick={onclickAddPostHandler}>Add post</button>
            </div>
        </div>
        {props.posts.map( u => <Post key={u.id} message={u.message} likes={u.likes} id={u.id}/>)}
    </div>
};