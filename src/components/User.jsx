import React from 'react'
import PropTypes from 'prop-types'

const User = ({
    user: { id, name, address, avatarUrl, username, website, phone, company },
}) => {
    return (
        <li id={id}>
            <div>
                <img src={avatarUrl} alt={name} />
                <h2>
                    {username} {name}
                </h2>
                <h4>City: {address.city}</h4>
                <p>Phone: {phone}</p>
                <a href={website}> {website}</a>
                <h5>Company: {company.name}</h5>
            </div>
        </li>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        email: PropTypes.string,
        address: PropTypes.shape({
            street: PropTypes.string,
            suite: PropTypes.string,
            city: PropTypes.string.isRequired,
            zipcode: PropTypes.string,
            geo: PropTypes.shape({
                lat: PropTypes.string,
                lng: PropTypes.string,
            }),
        }),
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string,
            catchPhrase: PropTypes.string,
            bs: PropTypes.string,
        }),
    }),
}

export default User
