import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return(
        <div>
            <div>
            <img alt={'background picture'}
                 width={'100%'}
                 height={'200px'}
                 src={'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}/>
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;