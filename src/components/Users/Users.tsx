import React from "react";
import style from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsersAC([
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: true, name: 'Vladimir', status: 'I am a boss', location: {city: 'Grodno', country: 'Belarus'}},
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: true, name: 'Alex', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: false, name: 'Evgenii', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: false, name: 'Viktoria', status: 'I am a boss', location: {city: 'Ural', country: 'Russia'}},
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: true, name: 'Sergey', status: 'I am a boss', location: {city: 'SPB', country: 'Russia'}},
            {id: v1(), photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', followed: false, name: 'Oskar', status: 'I am a boss', location: {city: 'Astata', country: 'Kazahstan'}},
        ])
    }

    return <div>
        {props.users.map(el => {

            const onClickFollowHandler = () => props.usFollow(el.id)
            const onClickUnFollowHandler = () => props.follow(el.id)

            return (
                <div key={el.id} className={style.items}>
                    <div className={`${style.item} ${style.itemImgButton}`}>
                        <div>
                            <img style={{width: '50px', borderRadius: '20px'}}
                                 alt={'ava'}
                                 src={el.photoUrl}/>
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
                            <div>{el.location.city}</div>
                            <div>{el.location.country}</div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
};