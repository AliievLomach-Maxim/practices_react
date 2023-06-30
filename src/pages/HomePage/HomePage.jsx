import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Button from 'components/Button/Button'
import UsersList from 'components/UserList/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersThunk } from 'store/users/thunks'
import { usersSelector } from 'store/users/selectors'

const LIMIT = 10

const HomePage = () => {
    const [currentPage, setPage] = useState(1)
    const {
        items: users,
        total,
        page,
        isLoading,
        error,
    } = useSelector(usersSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!users || page !== currentPage)
            dispatch(getAllUsersThunk({ page: currentPage, limit: LIMIT }))
                .unwrap()
                .then(({ total }) => toast.success(`Total: ${total} users`))
    }, [dispatch, currentPage, total, users, page])

    useEffect(() => {
        if (error) toast.error(error.message)
    }, [error])

    const loadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        <>
            {isLoading && <h4>Loading...</h4>}
            {users && (
                <>
                    <UsersList users={users} isDetails />
                    {users.length < total && (
                        <Button handleClick={loadMore} text={'more...'} />
                    )}
                </>
            )}
        </>
    )
}

export default HomePage
