import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from 'store/auth/selectors'
import { commentsSelector } from 'store/comments/selectors'
import {
    createCommentThunk,
    getCommentsByPostThunk,
} from 'store/comments/thunks'

const PostDetails = ({ post: { _id, title, body } }) => {
    const { profile } = useSelector(authSelector)
    const { comments } = useSelector(commentsSelector)
    const [commentsData, setCommentsData] = useState(null)

    useEffect(() => {
        comments?.[0]?.postId === _id
            ? setCommentsData(comments)
            : setCommentsData(null)
    }, [_id, comments])

    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(
            createCommentThunk({
                id: _id,
                body: { body: e.target[0].value, userId: profile._id },
            })
        )
            .unwrap()
            .then(() => dispatch(getCommentsByPostThunk(_id)))
        e.target.reset()
    }
    const handleShow = async () => {
        dispatch(getCommentsByPostThunk(_id))
    }

    return (
        <>
            <h3>{title}</h3>
            <p>{body}</p>

            {!commentsData && (
                <button onClick={handleShow}>Show comments</button>
            )}
            {commentsData &&
                commentsData.map(com => (
                    <Fragment key={com._id}>
                        <h3>{com.creator.firstName}</h3>
                        <p>{com.body}</p>
                    </Fragment>
                ))}
            <form onSubmit={handleSubmit}>
                <textarea rows="2"></textarea>
                <button>Add comment</button>
            </form>
        </>
    )
}

export default PostDetails
