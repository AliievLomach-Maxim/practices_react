import { createSlice } from '@reduxjs/toolkit'
import { getCommentsByPostThunk } from './thunks'

const handleGetFulfilled = (state, { payload }) => {
    state.comments = payload.comments
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState: { comments: null },
    extraReducers: builder => {
        builder.addCase(getCommentsByPostThunk.fulfilled, handleGetFulfilled)
    },
})

export const commentsReducer = commentsSlice.reducer
