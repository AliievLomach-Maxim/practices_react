import PropTypes from 'prop-types'
import {
    FormControl,
    IconButton,
    InputAdornment,
    TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const FilterForm = ({ setFilterParams, filterQuery }) => {
    const handleChange = ({ target: { value } }) =>
        setFilterParams({ filter: value })

    return (
        <FormControl sx={{ m: '0 auto', width: 400 }} variant="outlined">
            <TextField
                id="outlined-adornment-weight"
                label="Search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                type="button"
                                sx={{ p: '10px' }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                value={filterQuery}
                onChange={handleChange}
            />
        </FormControl>
    )
}

FilterForm.propTypes = {
    setFilterParams: PropTypes.func.isRequired,
    filterQuery: PropTypes.string.isRequired,
}

export default FilterForm
