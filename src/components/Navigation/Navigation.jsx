import { authSelector } from 'store/auth/selectors'
import { NavList, StyledNavButton, StyledNavLink } from './Navigation.styled'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'store/auth/slice'
import { delToken } from 'api/api'

const Navigation = () => {
    const { token } = useSelector(authSelector)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
        delToken()
        localStorage.removeItem('token')
    }

    return (
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to={'/'}>Home</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={'/users'}>Users</StyledNavLink>
                </li>
                <li>
                    {token ? (
                        <StyledNavButton onClick={handleLogOut}>
                            Log Out
                        </StyledNavButton>
                    ) : (
                        <StyledNavLink to={'/signin'}>Log In</StyledNavLink>
                    )}
                </li>
            </NavList>
        </nav>
    )
}

export default Navigation
