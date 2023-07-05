import { fulfilled, updateFulfilled } from './handlers'
import {
    loginThunk,
    refreshThunk,
    signupThunk,
    updateUserThunk,
} from './thunks'

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
            .addCase(refreshThunk.fulfilled, fulfilled)
            .addCase(updateUserThunk.fulfilled, updateFulfilled)
    },
})
export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
