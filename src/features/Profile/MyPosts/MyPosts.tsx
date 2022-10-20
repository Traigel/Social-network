import React from "react";
import style from './MyPosts.module.scss'
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import {AddPostFormRedux, AddPostFormType} from "./addPostForm/AddPostForm";

export class MyPosts extends React.PureComponent<MyPostsPropsType> {

    // shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {

        const addNewPost = (formData: AddPostFormType) => {
            this.props.addPost(formData)
        }

        return <div className={style.myPosts}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            {this.props.profilePage.posts.map(u => <Post
                key={u.id}
                message={u.message}
                likes={u.likes}
                id={u.id}
                photos={this.props.profilePage.profile?.photos?.small}
            />)}
        </div>
    }
}