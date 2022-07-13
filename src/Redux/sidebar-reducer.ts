import {v1} from "uuid";

export type SidebarType = {
    id: string,
    name: string
}

const initialState: Array<SidebarType> = [
    {id: v1(), name: 'Vladimir'},
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Evgenii'},
    {id: v1(), name: 'Viktoria'},
    {id: v1(), name: 'Sergey'},
    {id: v1(), name: 'Oskar'},
]

export const sidebarReducer = (state: Array<SidebarType> = initialState, action: any) => {
    return (
        state
    )
}