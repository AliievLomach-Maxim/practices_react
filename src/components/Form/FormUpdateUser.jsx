import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Container, CustomForm } from './FormUpdateUserStyled'

const FormUpdateUser = ({ handleSubmit, profile }) => {
    return (
        <Container>
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
                {({ isValid }) => (
                    <CustomForm>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="firstName" />
                        <ErrorMessage name="firstName" component="div" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="lastName" />
                        <ErrorMessage name="lastName" component="div" />

                        <label htmlFor="phone">Phone</label>
                        <Field name="phone" type="phone" />
                        <ErrorMessage name="phone" component="div" />

                        <label htmlFor="gender">Gender</label>
                        <Field component="select" id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>

                        <div className="containerSubmit">
                            <button disabled={!isValid} type="submit">
                                Update user
                            </button>
                        </div>
                    </CustomForm>
                )}
            </Formik>
        </Container>
    )
}

export default FormUpdateUser
