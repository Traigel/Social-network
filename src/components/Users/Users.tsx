import React from "react";
import style from "./Users.module.css";
import usersImg from "../../assets/images/usersImg.jpg";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../../api/api";

type UsersCompType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (el: number) => void
    follow: (userID: number) => void
    usFollow: (userID: number) => void
}

export const Users = (props: UsersCompType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el, i) => {
                    return el <= 10 && <span
                        key={i}
                        className={props.currentPage === el ? style.selectPage : ''}
                        onClick={() => props.onPageChanged(el)}
                    >{el}</span>
                })}...
            </div>

            {props.users.map(el => {

                const onClickFollowHandler = () => {
                    followAPI.deleteUserID(el.id)
                        .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.usFollow(el.id)
                                }
                            }
                        )
                }
                const onClickUnFollowHandler = () => {
                    followAPI.postUserID(el.id)
                        .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(el.id)
                                }
                            }
                        )
                }

                return (
                    <div key={el.id} className={style.items}>
                        <div className={`${style.item} ${style.itemImgButton}`}>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img style={{width: '50px', borderRadius: '20px'}}
                                         alt={'ava'}
                                         src={el.photos.small !== null ? el.photos.small : usersImg}/>
                                </NavLink>
                            </div>
                            <div>
                                {el.followed
                                    ?
                                    <button onClick={onClickFollowHandler}>UnFollow</button>
                                    :
                                    <button onClick={onClickUnFollowHandler}>Follow</button>
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
    )
}