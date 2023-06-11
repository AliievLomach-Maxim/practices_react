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
                <li>
                    <StyledNavLink to={'/todos'}>Todos</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={'/create-todo'}>
                        Create Todo
                    </StyledNavLink>
                </li>
            </NavList>
        </nav>
    )
}

export default Navigation
