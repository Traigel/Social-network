import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {
    getUserProfileTC,
    getUserStatusTC,
    ProfileType,
    savePhotoTC,
    saveProfileTC,
    updateStatusTC
} from "./profile-reducer";
import {AppStateType} from "../../app/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

export class ProfileAPI extends React.Component<PropsType> {

    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID) {
            // @ts-ignore
            userID = this.props.myID
            if (!userID) {
                this.props.history.push('/login')  // не очень хорошее решение
            }
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userID !== prevProps.match.params.userID)
        this.refreshProfile()
    }

    render() {
        return (
            <div>
                <ProfileInfo {...this.props}
                             isOwner={!this.props.match.params.userID}
                />
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
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => void
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
        updateStatus: (status: string) => dispatch(updateStatusTC(status)),
        savePhoto: (file: File) => dispatch(savePhotoTC(file)),
        saveProfile: (formData: ProfileType) => dispatch(saveProfileTC(formData))
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPI)
