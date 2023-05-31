import React from 'react'
import User from '../User/User'
import PropTypes from 'prop-types'

const UsersList = ({ users, deleteUsers, openDetails }) => {
    return (
        <ul>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    deleteUsers={deleteUsers}
                    openDetails={openDetails}
                />
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
    deleteUsers: PropTypes.func.isRequired,
    openDetails: PropTypes.func.isRequired,
}

export default UsersList
