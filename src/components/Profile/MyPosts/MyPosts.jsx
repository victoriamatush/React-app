import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts =[
        {id:0, message:'Hi, how are u?', like:20},
        {id:1, message:'It\'s my first post', like:30},
        {id:2, message:'It\'s my second post', like:10},
    ]
    let postsmap = posts.map(p => <Post message={p.message} like={p.like}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsmap}
            </div>
        </div>
    )
}
export default MyPosts;