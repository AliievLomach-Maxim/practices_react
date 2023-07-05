import { Outlet } from 'react-router-dom'
import Navigation from 'components/Navigation/Navigation'
import { Header } from './Layout.styled'
import { useEffect } from 'react'
import { authSelector } from 'store/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from 'store/auth/thunks'
import Profile from 'components/Profile/Profile'

const Layout = () => {
    const { token, profile } = useSelector(authSelector)
    const localToken = localStorage.getItem('token')
    const dispatch = useDispatch()

    useEffect(() => {
        !token && localToken && dispatch(refreshThunk(localToken))
    }, [dispatch, localToken, token])

    return (
        <>
            <Header>
                <Navigation />
            </Header>
            {profile && <Profile profile={profile} />}

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
