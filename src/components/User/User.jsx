import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import { StyledButton, NativeText, Text, Title } from './User.styled'

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
        hasJob,
    },
    deleteUsers,
    changeJobStatus,
}) => {
    const isEndedBiz = email.endsWith('biz')

    return (
        <Section>
            <li>
                <img src={avatarUrl} alt={name} />
                <Title>
                    {username} {name}
                </Title>
                <h4>City: {address.city}</h4>
                <Text>
                    Phone: <NativeText>{phone}</NativeText>
                </Text>
                <Text>Has Job: {hasJob.toString()}</Text>
                <Text>
                    Email:
                    <NativeText isEndedBiz={isEndedBiz}>{email}</NativeText>
                </Text>
                <a href={website}> {website}</a>
                <h5>Company: {company.name}</h5>
                <StyledButton onClick={() => deleteUsers(id)}>
                    Delete
                </StyledButton>
                <StyledButton onClick={() => changeJobStatus(id)}>
                    Change job Status
                </StyledButton>
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
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            city: PropTypes.string.isRequired,
        }),
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
        hasJob: PropTypes.bool.isRequired,
    }),
    deleteUsers: PropTypes.func.isRequired,
    changeJobStatus: PropTypes.func.isRequired,
}

export default User
