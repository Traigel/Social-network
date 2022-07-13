import React from "react";
import style from './FriendsNavBar.module.css';
import {FriendsNavBarPropsType} from "./FriendsNavBarContainer";

export const FriendsNavBar = (props: FriendsNavBarPropsType) => {
    return <div>
        {props.sidebar.map(el =>  <div className={style.friendsItem} key={el.id}>
            <img alt={'ava'}
                 src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
            <div>{el.name}</div>
        </div>)}
    </div>

}