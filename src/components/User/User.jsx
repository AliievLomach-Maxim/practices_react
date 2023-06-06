import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import { NativeText, Text, Title, StyledLink } from './User.styled'

const User = ({ user: { id, firstName, image, email, phone }, isDetails }) => {
    const isEndedBiz = email.endsWith('biz')

    return (
        <Section>
            <li>
                <img src={image} alt={'Avatar'} width="200px" />
                <Title>{firstName}</Title>
                <Text>
                    Phone: <NativeText>{phone}</NativeText>
                </Text>
                <Text>
                    Email:
                    <NativeText isEndedBiz={isEndedBiz}>{email}</NativeText>
                </Text>
                {isDetails && (
                    <StyledLink to={`/users/${id}`}>Show Details</StyledLink>
                )}
            </li>
        </Section>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string,
    }),
    openDetails: PropTypes.func.isRequired,
    isDetails: PropTypes.bool,
}

export default User
