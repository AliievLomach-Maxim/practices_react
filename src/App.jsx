import Error from 'components/Error/Error'
import Loader from 'components/Loader/Loader'
import AuthGuard from 'guards/AuthGuard'
import GuestGuard from 'guards/GuestGuard'
import ProfilePage from 'pages/ProfilePage/ProfilePage'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import { Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('Layout/Layout'))
const Posts = lazy(() => import('components/Posts/Posts'))
const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const UsersPage = lazy(() => import('pages/Users/UsersPage'))
const UserDetailsPage = lazy(() => import('pages/Users/UserDetailsPage'))

const App = () => {
    return (
        <>
            <Toaster position="top-right" />
            <Loader />
            <Error />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loader />}>
                            <Layout />
                        </Suspense>
                    }
                >
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route
                        path="users/:id"
                        element={
                            <AuthGuard>
                                <UserDetailsPage />
                            </AuthGuard>
                        }
                    >
                        <Route path="posts" element={<Posts />} />
                    </Route>
                    <Route
                        path="profile"
                        element={
                            <AuthGuard>
                                <ProfilePage />
                            </AuthGuard>
                        }
                    />
                </Route>
                <Route
                    path="/signin"
                    element={
                        <GuestGuard>
                            <SignInPage />
                        </GuestGuard>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <GuestGuard>
                            <SignUpPage />
                        </GuestGuard>
                    }
                />
            </Routes>
        </>
    )
}

export default App
