import React from "react";
import styles from './Post.module.css'
import avatar from '../../../../assets/images/usersImg.png'

type PostPropsType = {
    message: string
    likes: number
    id: string
    photos: string | undefined | null
}

export const Post = (props: PostPropsType) => {
    return <div className={styles.item}>
        <img alt={'ava'}
             src={props.photos ? props.photos : avatar}
        />
        {props.message}
        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
};