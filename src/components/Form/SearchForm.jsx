import PropTypes from 'prop-types'
import { Form } from './SearchForm.styled'

const SearchForm = ({ handleSearchQuery, setSearchParams, searchQuery }) => {
    const handleChange = ({ target: { value } }) =>
        setSearchParams({ search: value })

    const handleSubmit = e => {
        e.preventDefault()
        handleSearchQuery()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Search user by name"
                value={searchQuery}
                onChange={handleChange}
            />
            <button>Search</button>
        </Form>
    )
}

SearchForm.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
    setSearchParams: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
}

export default SearchForm
