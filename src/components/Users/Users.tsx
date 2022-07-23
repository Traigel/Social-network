import React from "react";
import style from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import usersImg from '../../assets/images/usersImg.jpg'
import axios from "axios";

export const Users = (props: UsersPropsType) => {
    const gerUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                        props.setUsersAC(response.data.items)
                    }
                )
        }

    }

    return <div>
        <button onClick={gerUsers}>Get users</button>
        {props.users.map(el => {

            const onClickFollowHandler = () => props.usFollow(el.id)
            const onClickUnFollowHandler = () => props.follow(el.id)

            return (
                <div key={el.id} className={style.items}>
                    <div className={`${style.item} ${style.itemImgButton}`}>
                        <div>
                            <img style={{width: '50px', borderRadius: '20px'}}
                                 alt={'ava'}
                                 src={el.photos.small !== null ? el.photos.small : usersImg}/>
                        </div>
                        <div>
                            {el.followed
                                ?
                                <button onClick={onClickFollowHandler}>Follow</button>
                                :
                                <button onClick={onClickUnFollowHandler}>UnFollow</button>
                            }
                        </div>
                    </div>
                    <div className={`${style.item} ${style.itemInfo}`}>
                        <div className={style.item}>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </div>
                        <div className={`${style.item} ${style.location}`}>
                            {/*<div>{el.location.city}</div>*/}
                            {/*<div>{el.location.country}</div>*/}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
};