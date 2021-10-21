import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {
    let postsmap = props.posts.map(p => <Post message={p.message} like={p.like}/>)
    let textRef = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onTextChange = () => {
        props.dispatch(updateNewPostTextActionCreator(textRef.current.value))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={textRef} onChange={onTextChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsmap}
            </div>
        </div>
    )
}
export default MyPosts;