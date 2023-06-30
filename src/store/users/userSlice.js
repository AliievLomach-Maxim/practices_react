import { initialState } from './initialState'
import { createSlice } from '@reduxjs/toolkit'
import {  getAllUsersThunk } from './thunks'
import {
    handleFulfilled,
    handleGetFulfilled,
    handlePending,
    handleRejected,
} from './handlers'

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllUsersThunk.fulfilled, handleGetFulfilled)
            .addMatcher(
                action => action.type.endsWith('/pending'),
                handlePending
            )
            .addMatcher(
                action => action.type.endsWith('/fulfilled'),
                handleFulfilled
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                handleRejected
            )
    },
})

export const usersReducer = usersSlice.reducer
