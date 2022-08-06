import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


export class ProfileAPI extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {userID = '23751'}
        profileAPI.getUserID(userID)
            .then(response => {
                    this.props.setUserProfileAC(response.data)
                }
            )
    }

    render() {
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
}

type mapDispatchToPropsTye = {
    setUserProfileAC: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        setUserProfileAC: (profile: any) => dispatch(setUserProfileAC(profile))
    }
}

const WithUrlDataCC = withRouter(ProfileAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataCC)