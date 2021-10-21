import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src={'https://www.vyshneve-rada.gov.ua/images/stories/2016/2/lesya-ukrayinka.jpg'}/>
            {props.message}
            <div className={s.like}>
                <span> {props.like} likes</span>
            </div>
        </div>
    )
}
export default Post;