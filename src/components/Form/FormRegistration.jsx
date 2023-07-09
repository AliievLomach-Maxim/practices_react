import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Button,
    CardActions,
    CardContent,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { StyledLink } from './FormLogin'

const FormRegistration = ({ handleSubmit }) => {
    return (
        <Formik
            initialValues={{ firstName: '', email: '', password: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .min(3, 'Must be min 3 characters')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must be at least 8 characters')
                    .matches(
                        /[A-Z]/,
                        'Password must contain at least one uppercase letter'
                    )
                    .matches(
                        /[0-9]/,
                        'Password must contain at least one digit'
                    ),
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
                                            name="firstName"
                                            type="firstName"
                                            id="firstName"
                                            label="First Name"
                                            fullWidth
                                            onChange={formik.handleChange}
                                            error={formik.errors.firstName}
                                        />
                                        {formik.errors.firstName && (
                                            <Typography
                                                m={0}
                                                p={0}
                                                variant="subtitle1"
                                                color="red"
                                            >
                                                {formik.errors.firstName}
                                            </Typography>
                                        )}
                                    </Stack>
                                    <Stack>
                                        <TextField
                                            name="email"
                                            type="email"
                                            id="email"
                                            label="Email"
                                            fullWidth
                                            error={formik.errors.email}
                                            onChange={formik.handleChange}
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
                                            error={formik.errors.password}
                                            onChange={formik.handleChange}
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
                                <StyledLink to="/signin">Log In</StyledLink>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={!formik.isValid}
                                >
                                    Sign Up
                                </Button>
                            </CardActions>
                        </Stack>
                    </Form>
                </Stack>
            )}
        </Formik>
    )
}

export default FormRegistration
