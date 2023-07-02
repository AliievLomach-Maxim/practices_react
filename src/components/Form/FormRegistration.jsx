import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CustomForm } from './SearchFormik.styled'
import { Link } from 'react-router-dom'

const FormRegistration = ({ handleSubmit, isLoading }) => {
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
            {({ isValid }) => (
                <CustomForm>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="firstName" />
                    <ErrorMessage name="firstName" component="div" />

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" />

                    <div className="containerSubmit">
                        <Link to="/signin">Log In</Link>
                        <button disabled={!isValid || isLoading} type="submit">
                            Sign Up
                        </button>
                    </div>
                </CustomForm>
            )}
        </Formik>
    )
}

export default FormRegistration
