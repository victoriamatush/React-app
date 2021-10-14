import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            WOOOOOOW
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are u?'} like={20}/>
                <Post message={'It\'s my first post'} like={30}/>
                <Post message={'It\'s my second post'} like={10}/>
            </div>
        </div>
    )
}
export default MyPosts;