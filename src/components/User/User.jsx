import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import { StyledButton, NativeText, Text, Title } from './User.styled'

const User = ({
    user: { id, name, avatarUrl, username, website, phone, email, hasJob },
    deleteUsers,
    changeJobStatus,
}) => {
    const isEndedBiz = email.endsWith('biz')

    return (
        <Section>
            <li>
                <img src={avatarUrl} alt={'Avatar'} />
                <Title>
                    {username} {name}
                </Title>
                <Text>
                    Phone: <NativeText>{phone}</NativeText>
                </Text>
                <Text>Has Job: {hasJob.toString()}</Text>
                <Text>
                    Email:
                    <NativeText isEndedBiz={isEndedBiz}>{email}</NativeText>
                </Text>
                <a href={website}> {website}</a>
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
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        hasJob: PropTypes.bool.isRequired,
    }),
    deleteUsers: PropTypes.func.isRequired,
    changeJobStatus: PropTypes.func.isRequired,
}

export default User
