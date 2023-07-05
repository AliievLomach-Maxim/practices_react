import { combineReducers } from 'redux'
import { usersReducer } from './users/userSlice'
import { todoReducer } from './todos/todoSlice'
import { authReducer } from './auth/slice'
import { rootReducer } from './root/rootSlice'
import { commentsReducer } from './comments/slice'

export const reducer = combineReducers({
    users: usersReducer,
    todo: todoReducer,
    auth: authReducer,
    root: rootReducer,
    comments: commentsReducer,
})
