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
    follow: (userID: string) => void
    usFollow: (userID: string) => void
    setUsersAC: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => dispatch(followAC(userID)),
        usFollow: (userID: string) => dispatch(usFollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)