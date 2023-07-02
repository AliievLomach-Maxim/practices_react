import {
    fulfilled,
    handleFulfilled,
    handlePending,
    handleRejected,
} from './handlers'
import { loginThunk, signupThunk } from './thunks'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    token: '',
    profile: null,
    isLoading: false,
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: state => {
            state.token = ''
            state.profile = null
            state.isLoading = false
            state.error = ''
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunk.fulfilled, fulfilled)
            .addCase(signupThunk.fulfilled, fulfilled)
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
export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
