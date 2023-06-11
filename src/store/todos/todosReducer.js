import { initialState } from './initialState'
import { CREATE_TODO, DELETE_TODO } from './types'

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_TODO:
            return { ...state, todo: [...state.todo, payload] }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(({ id }) => id !== payload),
            }

        default:
            return state
    }
}
