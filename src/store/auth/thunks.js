import { createAsyncThunk } from '@reduxjs/toolkit'
import { login, refresh, signup } from 'api/auth'
import { updateUser } from 'api/users'

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const data = await login(body)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const signupThunk = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const data = await signup(body)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateUserThunk = createAsyncThunk(
    'user/update',
    async ({ id, user }, { rejectWithValue }) => {
        try {
            const data = await updateUser(id, user)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const refreshThunk = createAsyncThunk(
    'auth/refresh',
    async (token, { rejectWithValue }) => {
        try {
            const data = await refresh(token)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
