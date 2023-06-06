import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import {
    NativeText,
    Text,
    Title,
    StyledLink,
    StyledButton,
} from './User.styled'

const User = ({ user: { id, firstName, image, email, phone }, isDetails }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = route => {
        navigate(route, { state: location.state })
    }

    const pathname = location.pathname === '/' ? '/users' : location.pathname

    return (
        <>
            {!isDetails && (
                <StyledButton onClick={() => handleClick(location.state)}>
                    {'<'}
                </StyledButton>
            )}
            <Section>
                <li>
                    <img src={image} alt={'Avatar'} width="200px" />
                    <Title>{firstName}</Title>
                    <Text>
                        Phone: <NativeText>{phone}</NativeText>
                    </Text>
                    <Text>
                        Email:
                        <NativeText>{email}</NativeText>
                    </Text>
                    {isDetails ? (
                        <StyledLink to={`${pathname}/${id}`} state={location}>
                            Show Details
                        </StyledLink>
                    ) : (
                        <>
                            <StyledButton onClick={() => handleClick('posts')}>
                                Posts
                            </StyledButton>
                            <StyledButton onClick={() => handleClick('todos')}>
                                Todos
                            </StyledButton>
                        </>
                    )}
                </li>
                <Outlet />
            </Section>
        </>
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
    isDetails: PropTypes.bool,
}

export default User
