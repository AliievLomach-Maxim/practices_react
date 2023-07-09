import FormRegistration from 'components/Form/FormRegistration'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signupThunk } from 'store/auth/thunks'
import { Container } from 'pages/SignInPage/SignInPage'
import { Stack, Typography } from '@mui/material'

const SignUpPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = body => {
        dispatch(signupThunk(body))
    }

    return (
        <Container sx={{ maxWidth: 600, m: '0 auto' }}>
            <Stack m={6}>
                <Link className="homeLink" to="/">
                    Go Home
                </Link>
                <Typography variant="h5" sx={{ m: '0 auto' }}>
                    Sign Up
                </Typography>
            </Stack>
            <FormRegistration handleSubmit={handleSubmit} />
        </Container>
    )
}

export default SignUpPage
