import { Formik } from 'formik'

const FormikForm = ({ addUser, closeForm }) => {
    return (
        <Formik
            initialValues={{ name: '', email: '' }}
            onSubmit={values => {
                addUser({ ...values })
                closeForm()
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
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
            )}
        </Formik>
    )
}
export default FormikForm
