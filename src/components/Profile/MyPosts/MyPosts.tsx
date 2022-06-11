import React, {ChangeEvent} from "react";
import { PostsType } from "../../../Redux/myState";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let onChangeAddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
    }

    let onclickAddPostHandler = () => {

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