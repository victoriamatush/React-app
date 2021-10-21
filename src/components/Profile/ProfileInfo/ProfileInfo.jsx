import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt={'background'}
                     width={'100%'}
                     height={'200px'}
                     src={'https://thumbs.dreamstime.com/b/pile-old-books-open-book-glasses-cup-coffee-pile-old-books-open-book-glasses-cup-coffee-reading-literature-111414224.jpg'}/>
            </div>
            <div className={s.info}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;