import { useFormik } from 'formik'

const FormikForm = ({ addUser, closeForm }) => {
    const formik = useFormik({
        initialValues: { firstName: '', email: '' },
        onSubmit: values => {
            addUser({ ...values })
            closeForm()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}
export default FormikForm
