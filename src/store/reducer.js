import { combineReducers } from 'redux'
import { usersReducer } from './users/userSlice'
import { todoReducer } from './todos/todoSlice'

export const reducer = combineReducers({
    users: usersReducer,
    todo: todoReducer,
})
