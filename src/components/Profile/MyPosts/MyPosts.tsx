import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post message={'Hello word'} likes={24}/>
        <Post message={'Yo! i`m props'} likes={56}/>
    </div>
};