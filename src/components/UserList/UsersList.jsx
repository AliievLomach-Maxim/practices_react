import React from 'react'
import User from '../User/User'
import PropTypes from 'prop-types'

const UsersList = ({ users }) => {
    return (
        <ul>
            {users.map(el => (
                <User key={el.id} user={el} />
            ))}
        </ul>
    )
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

export default UsersList
