import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {setAuthUserDateTC} from "../../Redux/auth-reducer";

export class HeaderAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.setAuthUserDateTC()
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
    setAuthUserDateTC: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTye => {
    return {
        setAuthUserDateTC: () => dispatch(setAuthUserDateTC())
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)

