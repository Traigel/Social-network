import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import { ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";



export class ProfileAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
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
};



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

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI)