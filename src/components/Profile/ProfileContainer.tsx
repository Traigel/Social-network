import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getUserProfileTC, ProfileType} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export class ProfileAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {userID = '23751'}
        this.props.getUserProfileTC(userID)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <ProfileInfo profile={this.props.profile}/>
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
    isAuth: boolean
}

type mapDispatchToPropsTye = {
    getUserProfileTC: (userID: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        getUserProfileTC: (userID: string) => dispatch(getUserProfileTC(userID))
    }
}

const WithUrlDataCC = withRouter(ProfileAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataCC)