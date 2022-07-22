import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, UsersType, usFollowAC} from "../../Redux/users-reducer";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[]
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    setUsersAC: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        usFollow: (userID: number) => dispatch(usFollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)