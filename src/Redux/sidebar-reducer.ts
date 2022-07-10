import {v1} from "uuid";

export type SidebarType = {
    id: string,
    name: string
}

const initialState: Array<SidebarType> = [
    {id: v1(), name: 'Vladimir'},
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Dima'},
    {id: v1(), name: 'Vasa'},
    {id: v1(), name: 'Masha'},
]

export const sidebarReducer = (state: Array<SidebarType> = initialState, action: any) => {
    return (
        state
    )
}