import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &.active {
        text-shadow: 0px 0px 18px red;
    }
    &:hover {
        text-shadow: 0px 0px 18px black;
    }
`

export const NavList = styled.ul`
    display: flex;
    padding: 0 24px;

    & li {
        list-style-type: none;
        margin: 0 24px;
        font-size: 30px;
    }
`
