import React from "react";
import { PostsType } from "../../../../Redux/profile-reducer";
import s from './Post.module.css'

export const Post = (props: PostsType) => {
    return <div className={s.item}>
        <img alt={'ava'}
             src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
        {props.message}
        <div>
            <span>Like {props.likes }</span>
        </div>
    </div>
};