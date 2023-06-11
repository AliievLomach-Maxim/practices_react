import { createStore } from 'redux'
import { todosReducer } from './todos/todosReducer'

export const store = createStore(todosReducer)
