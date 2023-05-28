import React from 'react'
import User from '../User/User'
import PropTypes from 'prop-types'

const UsersList = ({ users, deleteUsers, changeJobStatus, openDetails }) => {
    return (
        <ul>
            {users.map(el => (
                <User
                    key={el.id}
                    user={el}
                    deleteUsers={deleteUsers}
                    changeJobStatus={changeJobStatus}
                    openDetails={openDetails}
                />
            ))}
        </ul>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            name: PropTypes.string.isRequired,
            username: PropTypes.string,
            avatarUrl: PropTypes.string,
            email: PropTypes.string.isRequired,
            address: PropTypes.shape({
                city: PropTypes.string,
            }),
            phone: PropTypes.string,
            website: PropTypes.string,
            hasJob: PropTypes.bool.isRequired,
        })
    ),
    deleteUsers: PropTypes.func.isRequired,
    changeJobStatus: PropTypes.func.isRequired,
    openDetails: PropTypes.func.isRequired,
}

export default UsersList
