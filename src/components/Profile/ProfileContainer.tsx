import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {getUserProfileTC, getUserStatusTC, ProfileType, updateStatusTC} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class ProfileAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            // @ts-ignore
            userID = this.props.myID
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <div>
                <ProfileInfo {...this.props}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

type PathParamsType = { userID: string }
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsTye

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    myID: number | null
    isAuth: boolean
}

type mapDispatchToPropsTye = {
    getUserProfile: (userID: string) => void
    getUserStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myID: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        getUserProfile: (userID: string) => dispatch(getUserProfileTC(userID)),
        getUserStatus: (userID: string) => dispatch(getUserStatusTC(userID)),
        updateStatus: (status: string) => dispatch(updateStatusTC(status))
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPI)
