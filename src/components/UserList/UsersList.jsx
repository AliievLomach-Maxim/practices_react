import PropTypes from 'prop-types'
import User from '../User/User'

const UsersList = ({ users, isDetails }) => {
    return (
        <ul>
            {users.map(user => (
                <User key={user.id} user={user} isDetails={isDetails} />
            ))}
        </ul>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            image: PropTypes.string,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string,
        })
    ),
    isDetails: PropTypes.bool,
}

export default UsersList
