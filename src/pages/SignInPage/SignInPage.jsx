import FormLogin from 'components/Form/FormLogin'
import { Container } from 'pages/SignPage.styled'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginThunk } from 'store/auth/thunks'

const SignInPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = body => {
        dispatch(loginThunk(body))
    }

    return (
        <Container>
            <Link className="homeLink" to="/">
                Go Home
            </Link>
            <h2>Log In</h2>
            <div>
                <FormLogin handleSubmit={handleSubmit} />
            </div>
        </Container>
    )
}

export default SignInPage
