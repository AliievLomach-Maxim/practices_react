import Loader from 'components/Loader/Loader'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import { Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('Layout/Layout'))
const Posts = lazy(() => import('components/Posts/Posts'))
const Todos = lazy(() => import('components/Todos/Todos'))
const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const UsersPage = lazy(() => import('pages/Users/UsersPage'))
const UserDetailsPage = lazy(() => import('pages/Users/UserDetailsPage'))

const App = () => {
    return (
        <>
            <Toaster />
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
                    <Route path="users/:id" element={<UserDetailsPage />}>
                        <Route path="posts" element={<Posts />} />
                        <Route path="todos" element={<Todos />} />
                    </Route>
                </Route>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </>
    )
}

export default App
