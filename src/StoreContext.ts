import React from "react";
import {ProfilePageType} from "./Redux/profile-reducer";
import {DialogsPageType} from "./Redux/dialogs-reducer";
import {SidebarType} from "./Redux/sidebar-reducer";

type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<SidebarType>
}

interface IContextProps {
    state: StoreType
    dispatch: ({type}:{type: string}) => void
    getState: () => StoreType
}

export const StoreContext = React.createContext({} as IContextProps)