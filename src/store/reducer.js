import { combineReducers } from 'redux'
import { usersReducer } from './users/userSlice'
import { todoReducer } from './todos/todoSlice'
import { authReducer } from './auth/slice'

export const reducer = combineReducers({
    users: usersReducer,
    todo: todoReducer,
    auth: authReducer,
})
