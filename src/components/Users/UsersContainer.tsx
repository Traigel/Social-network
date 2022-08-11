import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC, getUsersTC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    UsersType,
    usFollowAC
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";



class UsersAPI extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(date => {
                    this.props.toggleIsFetchingAC(false)
                    this.props.setUsersAC(date.items)
                    this.props.setTotalUsersCountAC(date.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(date => {
                    this.props.toggleIsFetchingAC(false)
                    this.props.setUsersAC(date.items)
                }
            )
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
                follow={this.props.follow}
                usFollow={this.props.usFollow}
                toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
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
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    setUsersAC: (users: UsersType[]) => void
    setCurrentPageAC: (newCurrentPage: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
    toggleFollowingProgressAC: (isFetching: boolean, userID: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
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

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        usFollow: (userID: number) => dispatch(usFollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setCurrentPageAC: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCountAC: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        toggleIsFetchingAC: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching)),
        toggleFollowingProgressAC: (isFetching: boolean, userID: number) => dispatch(toggleFollowingProgressAC(isFetching, userID)),
        getUsersTC: (currentPage: number, pageSize: number) => dispatch(getUsersTC(currentPage, pageSize))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)