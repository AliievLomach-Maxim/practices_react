import { createAsyncThunk } from '@reduxjs/toolkit'
import { login, signup } from 'api/auth'

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
