import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ handleSearchQuery }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = ({ target: { value } }) => setSearchQuery(value)

    const handleSubmit = e => {
        e.preventDefault()
        handleSearchQuery(searchQuery)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Search user by name"
                value={searchQuery}
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
    )
}

SearchForm.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
}

export default SearchForm
