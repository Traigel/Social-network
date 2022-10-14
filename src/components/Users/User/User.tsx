import React from "react";
import style from "./User.module.css";
import usersImg from "../../../assets/images/usersImg.jpg";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../Redux/users-reducer";

type UserCompType = {
    user: UsersType
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    followingInProgress: number[]
}

export const User = (props: UserCompType) => {

    const onClickFollowHandler = () => props.usFollow(props.user.id)
    const onClickUnFollowHandler = () => props.follow(props.user.id)

    return (
        <div className={style.items}>
            <div className={`${style.item} ${style.itemImgButton}`}>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img style={{width: '50px', borderRadius: '20px'}}
                             alt={'ava'}
                             src={props.user.photos.small !== null ? props.user.photos.small : usersImg}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed
                        ?
                        <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={onClickFollowHandler}>UnFollow</button>
                        :
                        <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={onClickUnFollowHandler}>Follow</button>
                    }
                </div>
            </div>
            <div className={`${style.item} ${style.itemInfo}`}>
                <div className={style.item}>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </div>
                <div className={`${style.item} ${style.location}`}>
                </div>
            </div>
        </div>
    )
}