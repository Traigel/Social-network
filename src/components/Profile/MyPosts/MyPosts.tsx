import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello word', likes: 24},
        {id: 2, message: 'Yo! i`m props', likes: 56},
    ]

    return <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <Post message={'Hello word'} likes={24}/>
        <Post message={'Yo! i`m props'} likes={56}/>
    </div>
};