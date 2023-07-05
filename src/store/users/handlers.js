

export const handleGetFulfilled = (state, { payload }) => {
    payload.page > 1
        ? state.users.items.push(...payload.users)
        : (state.users.items = payload.users)
    state.users.total = payload.total
    state.users.page = payload.page
}

export const handleDeleteFulfilled = (state, { payload }) => {
    state.users.items = payload
}
