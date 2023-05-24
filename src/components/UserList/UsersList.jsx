import React from 'react'
import User from '../User/User'
import PropTypes from 'prop-types'

const UsersList = ({ users, deleteUsers, changeJobStatus }) => {
    return (
        <ul>
            {users.map(el => (
                <User
                    key={el.id}
                    user={el}
                    deleteUsers={deleteUsers}
                    changeJobStatus={changeJobStatus}
                />
            ))}
        </ul>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            avatarUrl: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            address: PropTypes.shape({
                city: PropTypes.string.isRequired,
            }),
            phone: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            company: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }),
        })
    ),
    deleteUsers: PropTypes.func.isRequired,
    changeJobStatus: PropTypes.func.isRequired,
}

export default UsersList
