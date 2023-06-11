import { CREATE_TODO, DELETE_TODO } from './types'

export const createTodoAction = todo => ({ type: CREATE_TODO, payload: todo })
export const deleteTodoAction = id => ({ type: DELETE_TODO, payload: id })
