import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UsersType, usFollowAC} from "../../Redux/users-reducer";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    setUsersAC: (users: UsersType[]) => void
    setCurrentPageAC: (newCurrentPage: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        usFollow: (userID: number) => dispatch(usFollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setCurrentPageAC: (pageNumber:number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCountAC: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)