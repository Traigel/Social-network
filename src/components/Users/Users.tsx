import React from "react";
import style from "./Users.module.css";
import usersImg from "../../assets/images/usersImg.jpg";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

type UsersCompType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (el: number) => void
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersCompType) => {

    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
            />

            {props.users.map(el => <User
                    key={el.id}
                    user={el}
                    follow={props.follow}
                    usFollow={props.usFollow}
                    followingInProgress={props.followingInProgress}
                />
            )}
        </div>
    )
}