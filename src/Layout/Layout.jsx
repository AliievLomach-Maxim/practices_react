import { Outlet } from 'react-router-dom'
import Navigation from 'components/Navigation/Navigation'
import { Header } from './Layout.styled'

const Layout = () => {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
