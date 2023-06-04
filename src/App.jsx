import { useEffect, useState } from 'react'
import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import { createUser, getUsers } from 'api/api'
import FormikForm from 'components/Form/FormikForm'

const SKIP = 10
const LIMIT = 10

const App = () => {
    const [users, setUsers] = useState(null)
    const [userDetails, setUserDetails] = useState(null)
    const [isShowUsers, setIsShowUsers] = useState(false)
    const [isShowForm, setIsShowForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() => {
        isShowUsers && handleUsers(page)
    }, [isShowUsers, page])

    const handleUsers = async page => {
        const skip = page * SKIP - LIMIT
        setIsLoading(true)
        try {
            const { users } = await getUsers(skip, LIMIT)
            setUsers(prev => (prev ? [...prev, ...users] : users))
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const addUser = async user => {
        setIsLoading(true)
        try {
            const data = await createUser(user)
            setUsers(prev => (prev ? [data, ...prev] : [data]))
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
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
        isShowUsers && setPage(prev => prev + 1)
        if (!isShowUsers) setIsShowUsers(true)
    }

    const toggleForm = () => setIsShowForm(prev => !prev)

    return (
        <Section title={'Users List'}>
            <Button
                text={isShowUsers ? 'Hide Users' : 'Show All Users'}
                handleClick={isShowUsers ? closeUsers : showUsers}
            />
            {isShowForm ? (
                <FormikForm addUser={addUser} closeForm={toggleForm} />
            ) : (
                <Button text={'Show Form'} handleClick={toggleForm} />
            )}

            {error && <h2>error</h2>}
            {isLoading && <h2>Loading...</h2>}

            {users && (
                <>
                    <UsersList
                        users={users}
                        deleteUsers={deleteUsers}
                        openDetails={openDetails}
                    />
                    <Button handleClick={loadMore} text={'more...'} />
                </>
            )}

            {userDetails && (
                <Modal user={userDetails} closeDetails={closeDetails} />
            )}
        </Section>
    )
}

export default App
