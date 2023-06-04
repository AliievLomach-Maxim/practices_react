import { useEffect, useState } from 'react'
import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import { createUser, getUsers, searchUser } from 'api/api'
import FormikForm from 'components/Form/FormikForm'
import SearchForm from './components/Form/SearchForm'
import { Toaster, toast } from 'react-hot-toast'

const SKIP = 10
const LIMIT = 10

const App = () => {
    const [users, setUsers] = useState(null)
    const [userDetails, setUserDetails] = useState(null)
    const [isShowUsers, setIsShowUsers] = useState(false)
    const [isShowForm, setIsShowForm] = useState(false)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        isShowUsers && handleUsers(page)
    }, [isShowUsers, page])

    const handleUsers = async pageNumber => {
        const skip = pageNumber * SKIP - LIMIT
        const toastId = toast.loading('Loading...')
        try {
            const { users, total } = await getUsers(skip, LIMIT)
            setUsers(prev => (prev ? [...prev, ...users] : users))
            toast.success(`Total: ${total} users`, {
                id: toastId,
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const addUser = async user => {
        const toastId = toast.loading('Loading...')
        try {
            const data = await createUser(user)
            setUsers(prev => (prev ? [data, ...prev] : [data]))
            toast.success('Create user successfully', {
                id: toastId,
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteUsers = userId =>
        setUsers(prev => prev.filter(({ id }) => id !== userId))

    const openDetails = user => setUserDetails(user)

    const closeDetails = () => setUserDetails(null)

    const closeUsers = () => {
        setIsShowUsers(false)
        setUsers(null)
    }

    const showUsers = () => setIsShowUsers(true)

    const loadMore = () => {
        users && setPage(prev => prev + 1)
    }

    const toggleForm = () => setIsShowForm(prev => !prev)

    const getSearchResult = async (searchQuery, pageNumber) => {
        const skip = pageNumber * SKIP - LIMIT
        const toastId = toast.loading('Loading...')
        try {
            const { users, total } = await searchUser(searchQuery, skip, LIMIT)
            if (total) {
                setUsers(prev => (prev ? [...prev, ...users] : [...users]))
                toast.success(`Finned ${total} users`, {
                    id: toastId,
                })
            } else {
                toast.error('Not found', {
                    id: toastId,
                })
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        page === 1 && setUsers(null)
        searchQuery && getSearchResult(searchQuery, page)
    }, [searchQuery, page])

    const handleSearchQuery = query => {
        setSearchQuery(query)
        setPage(1)
    }

    return (
        <>
            <Toaster />
            <Section title={'Users List'}>
                <SearchForm handleSearchQuery={handleSearchQuery} />
                <Button
                    text={isShowUsers ? 'Hide Users' : 'Show All Users'}
                    handleClick={isShowUsers ? closeUsers : showUsers}
                />
                {isShowForm ? (
                    <FormikForm addUser={addUser} closeForm={toggleForm} />
                ) : (
                    <Button text={'Show Form'} handleClick={toggleForm} />
                )}

                {users && (
                    <>
                        <UsersList
                            users={users}
                            deleteUsers={deleteUsers}
                            openDetails={openDetails}
                        />
                        {users.length > LIMIT && (
                            <Button handleClick={loadMore} text={'more...'} />
                        )}
                    </>
                )}

                {userDetails && (
                    <Modal user={userDetails} closeDetails={closeDetails} />
                )}
            </Section>
        </>
    )
}

export default App
