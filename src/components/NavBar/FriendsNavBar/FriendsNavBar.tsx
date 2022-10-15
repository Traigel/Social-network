import React from "react";
import style from './FriendsNavBar.module.css';
import usersImg from '../../../assets/images/usersImg.png'
import {FriendsNavBarPropsType} from "./FriendsNavBarContainer";

export const FriendsNavBar = (props: FriendsNavBarPropsType) => {
    return <div>
        {props.sidebar.map(el =>  <div className={style.friendsItem} key={el.id}>
            <img alt={'ava'}
                 src={usersImg}/>
            <div>{el.name}</div>
        </div>)}
    </div>

}