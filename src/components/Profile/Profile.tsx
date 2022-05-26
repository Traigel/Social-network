import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img
                src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
        </div>

    </div>
};