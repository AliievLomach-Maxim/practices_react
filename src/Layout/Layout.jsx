import { Outlet } from 'react-router-dom'
import Navigation from 'components/Navigation/Navigation'
import { useEffect } from 'react'
import { authSelector } from 'store/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from 'store/auth/thunks'
import Profile from 'components/Profile/Profile'
import { Box, Drawer, Toolbar } from '@mui/material'

const Layout = () => {
    const { token, profile } = useSelector(authSelector)
    const localToken = localStorage.getItem('token')
    const dispatch = useDispatch()

    useEffect(() => {
        !token && localToken && dispatch(refreshThunk(localToken))
    }, [dispatch, localToken, token])

    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            {profile && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 500,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 500,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    <Toolbar />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            p: 4,
                        }}
                    >
                        <Profile profile={profile} />
                    </Box>
                </Drawer>
            )}
            <Box component="main" sx={{ p: 3, width: '100%' }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
