import { initialState } from './initialState'
import { createSlice } from '@reduxjs/toolkit'
import { getAllUsersThunk } from './thunks'
import { handleGetFulfilled } from './handlers'

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.filter = payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getAllUsersThunk.fulfilled, handleGetFulfilled)
    },
})

export const usersReducer = usersSlice.reducer
export const { setFilter } = usersSlice.actions
