import FormLogin from 'components/Form/FormLogin'
import Loader from 'components/Loader/Loader'
import { Container } from 'pages/SignPage.styled'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authSelector } from 'store/auth/selectors'
import { loginThunk } from 'store/auth/thunks'

const SignInPage = () => {
    const { token, isLoading, error } = useSelector(authSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = body => {
        dispatch(loginThunk(body))
    }

    useEffect(() => {
        token && navigate('/')
    }, [navigate, token])

    useEffect(() => {
        error && toast.error(error.error)
    }, [error])

    return (
        <Container>
            {isLoading && <Loader />}
            <Link className="homeLink" to="/">
                Go Home
            </Link>
            <h2>Log In</h2>
            <div>
                <FormLogin handleSubmit={handleSubmit} isLoading={isLoading} />
            </div>
        </Container>
    )
}

export default SignInPage
