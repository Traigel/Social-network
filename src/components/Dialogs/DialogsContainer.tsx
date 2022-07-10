import React from "react";
import {addMessagesAC, updateNewMessagesAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let onChangeAddMessageHandler = (value: string) => {
                    store.dispatch(updateNewMessagesAC(value))
                }
                let onClickAddMessageHandler = () => {
                    store.dispatch(addMessagesAC())
                }

                return <Dialogs
                    dialogsPage={store.getState().dialogsPage}
                    onChangeAddMessage={onChangeAddMessageHandler}
                    onClickAddMessage={onClickAddMessageHandler}
                />
            }
        }

        </StoreContext.Consumer>

    )
};