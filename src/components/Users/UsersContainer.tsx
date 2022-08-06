import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    UsersType,
    usFollowAC
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";



class UsersAPI extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                    this.props.toggleIsFetchingAC(false)
                    this.props.setUsersAC(response.data.items)
                    this.props.setTotalUsersCountAC(response.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                    this.props.toggleIsFetchingAC(false)
                    this.props.setUsersAC(response.data.items)
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
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void
    usFollow: (userID: number) => void
    setUsersAC: (users: UsersType[]) => void
    setCurrentPageAC: (newCurrentPage: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
    toggleIsFetchingAC:(isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        usFollow: (userID: number) => dispatch(usFollowAC(userID)),
        setUsersAC: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setCurrentPageAC: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCountAC: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        toggleIsFetchingAC: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)