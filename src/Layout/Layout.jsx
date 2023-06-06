import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from 'components/Navigation/Navigation'
import { Header } from './Layout.styled'

const Layout = () => {
    return (
        <>
            <Toaster />
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
