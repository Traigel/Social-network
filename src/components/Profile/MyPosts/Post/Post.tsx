import React from "react";
import s from './Post.module.css'
import {PostsType} from "../../../../index";

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