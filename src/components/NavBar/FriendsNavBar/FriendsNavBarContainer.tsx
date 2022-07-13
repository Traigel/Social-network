import React from "react";
import {connect} from "react-redux";
import {FriendsNavBar} from "./FriendsNavBar";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {SidebarType} from "../../../Redux/sidebar-reducer";

export type FriendsNavBarPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    sidebar: Array<SidebarType>
}

type mapDispatchPropsType = {

}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {

    }
}

export const FriendsNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsNavBar)