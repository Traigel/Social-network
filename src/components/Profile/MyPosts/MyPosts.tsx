import React from "react";
import { PostsType } from "../../../Redux/myState";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsType) => {

    return <div className={style.myPosts}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        {props.posts.map( u => <Post key={u.id} message={u.message} likes={u.likes}/>)}
    </div>
};