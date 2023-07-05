import FormRegistration from 'components/Form/FormRegistration'
import { Container } from '../SignPage.styled'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signupThunk } from 'store/auth/thunks'

const SignUpPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = body => {
        dispatch(signupThunk(body))
    }

    return (
        <>
            <Container>
                <Link className="homeLink" to="/">
                    Go Home
                </Link>
                <h2>Sign Up</h2>
                <div>
                    <FormRegistration handleSubmit={handleSubmit} />
                </div>
            </Container>
        </>
    )
}

export default SignUpPage
