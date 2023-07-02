export const handlePending = state => {
    state.isLoading = true
}

export const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
    state.token = ''
}

export const handleFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.error = ''
}

export const fulfilled = (state, { payload }) => {
    state.token = payload.token
    state.profile = payload.user
}
