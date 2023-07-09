import styled from '@emotion/styled'
import { Card, Stack, Typography } from '@mui/material'
import FormLogin from 'components/Form/FormLogin'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginThunk } from 'store/auth/thunks'

export const Container = styled(Card)`
    box-shadow: 0px 0px 48px gray;
    margin: 0 auto;
    width: 600px;
    border-radius: 12px;
    padding: 24px 0 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    a.homeLink {
        padding-left: 24px;
        color: blue;
    }
`

const SignInPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = body => {
        dispatch(loginThunk(body))
    }

    return (
        <Container sx={{ maxWidth: 600, m: '0 auto' }}>
            <Stack m={6}>
                <Link className="homeLink" to="/">
                    Go Home
                </Link>
                <Typography variant="h5" sx={{ m: '0 auto' }}>
                    Sign In
                </Typography>
            </Stack>
            <FormLogin handleSubmit={handleSubmit} />
        </Container>
    )
}

export default SignInPage
