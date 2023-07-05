import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authSelector } from 'store/auth/selectors'

const GuestGuard = ({ children }) => {
    const { token } = useSelector(authSelector)

    return !token ? children : <Navigate to="/" />
}

export default GuestGuard
