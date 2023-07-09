import { authSelector } from 'store/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'store/auth/slice'
import { delToken } from 'api/api'
import AppBar from '@mui/material/AppBar'
import {
    Box,
    Stack,
    Divider,
    Drawer,
    List,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { token } = useSelector(authSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logOut())
        delToken()
        localStorage.removeItem('token')
    }

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                PRACTICES
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => navigate('/')}
                    >
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => navigate('/users')}
                    >
                        <ListItemText primary="Users" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window.document.body : undefined

    return (
        <>
            <AppBar
                component="nav"
                position="fixed"
                sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            mr: 4,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        PRACTICES - REACT
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        <Button color="inherit" onClick={() => navigate('/')}>
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => navigate('/users')}
                        >
                            Users
                        </Button>
                    </Box>
                    <Stack justifyContent="end">
                        <Button
                            color="inherit"
                            onClick={() => {
                                token ? handleLogOut() : navigate('/signin')
                            }}
                        >
                            {token ? 'Logout' : 'Login'}
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default Navigation
