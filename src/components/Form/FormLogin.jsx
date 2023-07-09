import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import {
    Button,
    CardActions,
    CardContent,
    Stack,
    TextField,
    Typography,
    styled,
} from '@mui/material'

export const StyledLink = styled(Link)`
    padding: 0;
    color: blue;
    font-weight: 400;
    font-size: 18px;
`

const FormLogin = ({ handleSubmit }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string().required('Password is required'),
            })}
            onSubmit={values => handleSubmit(values)}
        >
            {formik => (
                <Stack sx={{ width: 400, m: '0 auto' }}>
                    <Form>
                        <Stack>
                            <CardContent>
                                <Stack spacing={6}>
                                    <Stack>
                                        <TextField
                                            name="email"
                                            type="email"
                                            id="email"
                                            label="Email"
                                            fullWidth
                                            onChange={formik.handleChange}
                                            error={formik.errors.email}
                                        />
                                        {formik.errors.email && (
                                            <Typography
                                                m={0}
                                                p={0}
                                                variant="subtitle1"
                                                color="red"
                                            >
                                                {formik.errors.email}
                                            </Typography>
                                        )}
                                    </Stack>
                                    <Stack>
                                        <TextField
                                            name="password"
                                            type="password"
                                            id="password"
                                            label="Password"
                                            fullWidth
                                            onChange={formik.handleChange}
                                            error={formik.errors.password}
                                        />
                                        {formik.errors.password && (
                                            <Typography
                                                m={0}
                                                p={0}
                                                variant="subtitle1"
                                                color="red"
                                            >
                                                {formik.errors.password}
                                            </Typography>
                                        )}
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Stack>
                        <Stack mt={4} p={1}>
                            <CardActions
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <StyledLink to="/signup">Sign Un</StyledLink>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={!formik.isValid}
                                >
                                    Log in
                                </Button>
                            </CardActions>
                        </Stack>
                    </Form>
                </Stack>
            )}
        </Formik>
    )
}

export default FormLogin
