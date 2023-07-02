import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CustomForm } from './SearchFormik.styled'
import { Link } from 'react-router-dom'

const FormLogin = ({ handleSubmit, isLoading }) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
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
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" />
                    <div className="containerSubmit">
                        <Link to="/signup">Sign Un</Link>
                        <button disabled={!isValid || isLoading} type="submit">
                            Log In
                        </button>
                    </div>
                </CustomForm>
            )}
        </Formik>
    )
}

export default FormLogin
