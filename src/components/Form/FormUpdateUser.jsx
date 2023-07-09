import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    styled,
} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'

export const Container = styled(Card)`
    box-shadow: 0px 0px 24px gray;
    margin: 0 auto;
    width: 600px;
    border-radius: 12px;
    padding: 24px 0 64px;
`

const FormUpdateUser = ({ handleSubmit, profile }) => {
    const navigate = useNavigate()
    return (
        <>
            <Button
                variant="text"
                sx={{ borderRadius: 30, p: 1 }}
                onClick={() => navigate('/signin')}
            >
                <ArrowBackIosIcon fontSize="large" />
            </Button>
            <Container sx={{ maxWidth: 600, m: '0 auto' }}>
                <Formik
                    initialValues={{
                        firstName: profile.firstName || '',
                        lastName: profile.lastName || '',
                        phone: profile.phone || '',
                        gender: profile.gender || 'male',
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .min(3, 'Must be min 3 characters'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .min(3, 'Must be min 3 characters'),
                        phone: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .min(3, 'Must be min 3 characters'),
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
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    value={
                                                        formik.values.firstName
                                                    }
                                                    error={
                                                        formik.errors.firstName
                                                    }
                                                />
                                                {formik.errors.firstName && (
                                                    <Typography
                                                        m={0}
                                                        p={0}
                                                        variant="subtitle1"
                                                        color="red"
                                                    >
                                                        {
                                                            formik.errors
                                                                .firstName
                                                        }
                                                    </Typography>
                                                )}
                                            </Stack>
                                            <Stack>
                                                <TextField
                                                    name="lastName"
                                                    type="lastName"
                                                    id="lastName"
                                                    label="Last Name"
                                                    value={
                                                        formik.values.lastName
                                                    }
                                                    fullWidth
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    error={
                                                        formik.errors.lastName
                                                    }
                                                />
                                                {formik.errors.lastName && (
                                                    <Typography
                                                        m={0}
                                                        p={0}
                                                        variant="subtitle1"
                                                        color="red"
                                                    >
                                                        {formik.errors.lastName}
                                                    </Typography>
                                                )}
                                            </Stack>
                                            <Stack>
                                                <TextField
                                                    name="phone"
                                                    type="phone"
                                                    id="phone"
                                                    label="Phone"
                                                    value={formik.values.phone}
                                                    fullWidth
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    error={formik.errors.phone}
                                                />
                                                {formik.errors.phone && (
                                                    <Typography
                                                        m={0}
                                                        p={0}
                                                        variant="subtitle1"
                                                        color="red"
                                                    >
                                                        {formik.errors.phone}
                                                    </Typography>
                                                )}
                                            </Stack>
                                            <FormControl fullWidth>
                                                <InputLabel id="gender-select">
                                                    Gender
                                                </InputLabel>
                                                <Select
                                                    name="gender"
                                                    labelId="gender-select"
                                                    id="gender-select"
                                                    value={formik.values.gender}
                                                    label="Gender"
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                >
                                                    <MenuItem value="male">
                                                        Male
                                                    </MenuItem>
                                                    <MenuItem value="female">
                                                        Female
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Stack>
                                    </CardContent>
                                </Stack>
                                <Stack mt={4} p={1}>
                                    <CardActions sx={{ justifyContent: 'end' }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={!formik.isValid}
                                        >
                                            Update user
                                        </Button>
                                    </CardActions>
                                </Stack>
                            </Form>
                        </Stack>
                    )}
                </Formik>
            </Container>
        </>
    )
}

export default FormUpdateUser
