

export const fulfilled = (state, { payload }) => {
    state.token = payload.token
    state.profile = payload.user
}

export const updateFulfilled = (state, { payload }) => {
    state.profile = payload
}
