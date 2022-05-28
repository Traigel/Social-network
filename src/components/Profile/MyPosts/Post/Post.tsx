import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string,
    likes: number
}

export const Post = (props: PostType) => {
    return <div className={s.item}>
        <img alt={'ava'}
             src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
        {props.message}
        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
};