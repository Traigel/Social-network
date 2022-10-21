import React from "react";
import styles from './Post.module.scss'
import avatar from '../../../../assets/images/usersImg.png'

type PostPropsType = {
    message: string
    likes: number
    id: string
    photos: string | undefined | null
    name: string | undefined
}

export const Post = (props: PostPropsType) => {
    return <div className={styles.postBox}>
        <div className={styles.nameBox}>
            <img
                className={styles.img}
                alt={'ava'}
                src={props.photos ? props.photos : avatar}
            />
            <h3 className={styles.nameTitle}>{props.name}</h3>
        </div>
        <div className={styles.postText}>
            {props.message}
        </div>


        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
};