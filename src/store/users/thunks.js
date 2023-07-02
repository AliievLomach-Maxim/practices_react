import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from 'api/users'

export const getAllUsersThunk = createAsyncThunk(
    'users/getAllUsers',
    ({ page, limit }) => getUsers(page, limit)
)
