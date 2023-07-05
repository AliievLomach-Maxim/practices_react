import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authSelector } from 'store/auth/selectors'

const AuthGuard = ({ children }) => {
    const { token } = useSelector(authSelector)

    return token ? children : <Navigate to="/signin" />
}

export default AuthGuard
