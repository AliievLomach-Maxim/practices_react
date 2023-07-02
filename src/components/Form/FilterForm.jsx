import PropTypes from 'prop-types'
import { Form } from './SearchForm.styled'

const FilterForm = ({ setFilterParams, filterQuery }) => {
    const handleChange = ({ target: { value } }) =>
        setFilterParams({ filter: value })

    return (
        <Form>
            <input
                type="search"
                placeholder="Filter user by name or phone"
                value={filterQuery}
                onChange={handleChange}
            />
            <button>Search</button>
        </Form>
    )
}

FilterForm.propTypes = {
    setFilterParams: PropTypes.func.isRequired,
    filterQuery: PropTypes.string.isRequired,
}

export default FilterForm
