import CreateTodoPage from 'pages/CreateTodoPage/CreateTodoPage'
import TodosPage from 'pages/TodosPage/TodosPage'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('Layout/Layout'))
const Posts = lazy(() => import('components/Posts/Posts'))
const Todos = lazy(() => import('components/Todos/Todos'))
const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const UsersPage = lazy(() => import('pages/Users/UsersPage'))
const UserDetailsPage = lazy(() => import('pages/Users/UserDetailsPage'))

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense>
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
                <Route path="todos" element={<TodosPage />} />
                <Route path="create-todo" element={<CreateTodoPage />} />
            </Route>
        </Routes>
    )
}

export default App
