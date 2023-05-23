import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import { NativeText, Text, Title } from './User.styled'

const User = ({
    user: {
        id,
        name,
        address,
        avatarUrl,
        username,
        website,
        phone,
        company,
        email,
    },
}) => {
    const isEndedBiz = email.endsWith('biz')

    return (
        <Section>
            <li id={id}>
                <div>
                    <img src={avatarUrl} alt={name} />
                    <Title>
                        {username} {name}
                    </Title>
                    <h4>City: {address.city}</h4>
                    <Text>
                        Phone: <NativeText>{phone}</NativeText>
                    </Text>
                    <Text>
                        Email:
                        <NativeText isEndedBiz={isEndedBiz}>{email}</NativeText>
                    </Text>
                    <a href={website}> {website}</a>
                    <h5>Company: {company.name}</h5>
                </div>
            </li>
        </Section>
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
