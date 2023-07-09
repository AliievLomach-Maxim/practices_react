import {
    Avatar,
    Button,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { TextareaAutosize } from '@mui/base'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from 'store/auth/selectors'
import { commentsSelector } from 'store/comments/selectors'
import {
    createCommentThunk,
    getCommentsByPostThunk,
} from 'store/comments/thunks'
import styled from 'styled-components'

const StyledTextarea = styled(TextareaAutosize)`
    width: '100%';
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: #afb8c1;
    background: #24292f;
    border: 1px solid #424a53;
    box-shadow: 0px 2px 2px #24292f;

    &:hover {
        border-color: #3399ff;
    }

    &:focus {
        border-color: #3399ff;
        box-shadow: 0 0 0 3px #007fff;
    }
`

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
        <Card p={2} sx={{ boxShadow: '0 0 12px inset gray', m: 2 }}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="subtitle1">{body}</Typography>

                {!commentsData && (
                    <Button onClick={handleShow} sx={{ mb: 1 }}>
                        Show comments
                    </Button>
                )}
                {commentsData &&
                    commentsData.map(com => (
                        <Card
                            p={2}
                            key={com._id}
                            sx={{ boxShadow: '0 0 12px  gray', m: 2 }}
                        >
                            <CardContent>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Avatar
                                        sx={{ bgcolor: blueGrey[900] }}
                                        src={com.creator.image}
                                    />
                                    <Stack spacing={0.1}>
                                        <Typography
                                            variant="subtitle1"
                                            color="GrayText"
                                        >
                                            {com.creator.firstName}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {com.body}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                <form onSubmit={handleSubmit}>
                    <Stack direction="column" spacing={1}>
                        <StyledTextarea
                            minRows={1}
                            placeholder="Add comment..."
                        />
                        <Button sx={{ width: 130 }} type="submit">
                            Add comment
                        </Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}

export default PostDetails
