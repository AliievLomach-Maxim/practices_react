import { createAsyncThunk } from '@reduxjs/toolkit'
import { createComment, getCommentsByPost } from '../../api/comments'

export const getCommentsByPostThunk = createAsyncThunk(
    'comments/getCommentsByPost',
    id => getCommentsByPost(id)
)

export const createCommentThunk = createAsyncThunk(
    'comments/createComment',
    ({ id, body }) => createComment(id, body)
)
