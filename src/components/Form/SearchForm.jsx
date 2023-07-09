import PropTypes from 'prop-types'
import SearchIcon from '@mui/icons-material/Search'
import {
    FormControl,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
} from '@mui/material'

const SearchForm = ({ handleSearchQuery, setSearchParams, searchQuery }) => {
    const handleChange = ({ target: { value } }) =>
        setSearchParams({ search: value })

    const handleSubmit = e => {
        e.preventDefault()
        handleSearchQuery()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <FormControl
                    sx={{ m: '0 auto', width: 400 }}
                    variant="outlined"
                >
                    <TextField
                        id="outlined-adornment-weight"
                        label="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        type="submit"
                                        sx={{ p: '10px' }}
                                        aria-label="search"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </FormControl>
            </Stack>
        </form>
    )
}

SearchForm.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
    setSearchParams: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
}

export default SearchForm
