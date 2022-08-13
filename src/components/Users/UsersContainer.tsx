import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC, followTC, getUsersTC,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    UsersActionType,
    UsersType,
    usFollowAC,
    usFollowTC
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";



class UsersAPI extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.followTC}
                usFollow={this.props.usFollowTC}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    setCurrentPageAC: (newCurrentPage: number) => void
    toggleFollowingProgressAC: (isFetching: boolean, userID: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userID: number) => void
    usFollowTC: (userID: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionType>): mapDispatchToPropsType => {
    return {
        setCurrentPageAC: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        toggleFollowingProgressAC: (isFetching: boolean, userID: number) => dispatch(toggleFollowingProgressAC(isFetching, userID)),
        getUsersTC: (currentPage: number, pageSize: number) => dispatch(getUsersTC(currentPage, pageSize)),
        followTC: (userID: number) => dispatch(followTC(userID)),
        usFollowTC: (userID: number) => dispatch(usFollowTC(userID))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)