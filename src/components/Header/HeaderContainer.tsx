import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {AuthType, setAuthUserDateAC} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

export class HeaderAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        authAPI.getAuth()
            .then(data => {
                    if (data.resultCode === 0) {
                        this.props.setAuthUserDateAC(data.data)
                    }
                }
            )
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsTye

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsTye = {
    setAuthUserDateAC: (date: AuthType) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        setAuthUserDateAC: (date: AuthType) => dispatch(setAuthUserDateAC(date))
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)

