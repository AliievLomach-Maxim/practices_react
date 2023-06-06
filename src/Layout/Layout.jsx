import Navigation from 'Navigation/Navigation'
import React from 'react'
import { Header } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

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
