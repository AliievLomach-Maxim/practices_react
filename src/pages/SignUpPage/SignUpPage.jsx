import { useEffect } from 'react'
import FormRegistration from 'components/Form/FormRegistration'
import { Container } from '../SignPage.styled'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from 'store/auth/selectors'
import { signupThunk } from 'store/auth/thunks'
import Loader from 'components/Loader/Loader'
import { toast } from 'react-hot-toast'

const SignUpPage = () => {
    const { token, isLoading, error } = useSelector(authSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = body => {
        dispatch(signupThunk(body))
    }

    useEffect(() => {
        token && navigate('/')
    }, [navigate, token])

    useEffect(() => {
        error && toast.error(error.error)
    }, [error])

    return (
        <>
            <Container>
                {isLoading && <Loader />}
                <Link className="homeLink" to="/">
                    Go Home
                </Link>
                <h2>Sign Up</h2>
                <div>
                    <FormRegistration
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                </div>
            </Container>
        </>
    )
}

export default SignUpPage
