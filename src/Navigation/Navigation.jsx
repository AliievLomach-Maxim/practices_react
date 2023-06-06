import React from 'react'
import { NavList, StyledNavLink } from './Navigation.styled'

const Navigation = () => {
    return (
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to={'/'}>Home</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={'/users'}>Users</StyledNavLink>
                </li>
            </NavList>
        </nav>
    )
}

export default Navigation
