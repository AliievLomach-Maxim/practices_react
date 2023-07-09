import PropTypes from 'prop-types'
import User from '../User/User'
import { Grid } from '@mui/material'
import { authSelector } from 'store/auth/selectors'
import { useSelector } from 'react-redux'

const UsersList = ({ users, isDetails }) => {
    const { token } = useSelector(authSelector)

    return (
        <Grid container spacing={4} justifyContent="center">
            {users.map(user => (
                <Grid item xs={token ? 6 : 3} key={user._id}>
                    <User user={user} isDetails={isDetails} />
                </Grid>
            ))}
        </Grid>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            image: PropTypes.string,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string,
        })
    ),
    isDetails: PropTypes.bool,
}

export default UsersList
