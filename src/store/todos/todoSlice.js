import { createSlice, nanoid } from '@reduxjs/toolkit'
import { initialState } from './initialState'

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: {
            reducer: (state, { payload }) => {
                state.todo.push(payload)
            },
            prepare: todoName => ({
                payload: {
                    id: nanoid(),
                    todoName,
                    completed: false,
                },
            }),
        },
        deleteTodo: (state, { payload }) => {
            state.todo = state.todo.filter(({ id }) => id !== payload)
        },
        changeCompleted: (state, { payload }) => {
            state.todo = state.todo.map(item =>
                item.id === payload
                    ? { ...item, completed: !item.completed }
                    : item
            )
        },
    },
})

export const todoReducer = todoSlice.reducer
export const { createTodo, deleteTodo, changeCompleted } = todoSlice.actions
