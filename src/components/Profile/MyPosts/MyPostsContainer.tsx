import React from "react";
import {addPostAC, updateNewPostAC} from "../../../Redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let addPostHandler = () => {
                    store.dispatch(addPostAC())
                }
                let updateNewPostTextHandler = (value: string) => {
                    store.dispatch(updateNewPostAC(value))
                }

                return <MyPosts
                    profilePage={store.getState().profilePage}
                    updateNewPostText={updateNewPostTextHandler}
                    addPost={addPostHandler}
                />
            }}
        </StoreContext.Consumer>
    )
};