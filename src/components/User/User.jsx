import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import { StyledButton, NativeText, Text, Title } from './User.styled'

const User = ({
    user: { id, firstName, image, email, phone },
    deleteUsers,
    openDetails,
}) => {
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
                <StyledButton
                    onClick={() => openDetails({ firstName, image, email })}
                >
                    Show Details
                </StyledButton>
                <StyledButton onClick={() => deleteUsers(id)}>
                    Delete
                </StyledButton>
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
    deleteUsers: PropTypes.func.isRequired,
    openDetails: PropTypes.func.isRequired,
}

export default User
