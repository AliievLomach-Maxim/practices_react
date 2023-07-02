import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import Button from 'components/Button/Button'
import UsersList from 'components/UserList/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersThunk } from 'store/users/thunks'
import { filterSelector, usersSelector } from 'store/users/selectors'
import FilterForm from 'components/Form/FilterForm'
import { setFilter } from 'store/users/userSlice'
import { useSearchParams } from 'react-router-dom'
import { authSelector } from 'store/auth/selectors'
import Profile from 'components/Profile/Profile'
import Loader from 'components/Loader/Loader'

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
    const filter = useSelector(filterSelector)
    const [query, setFilterParams] = useSearchParams()
    const { profile } = useSelector(authSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!users || page !== currentPage)
            dispatch(getAllUsersThunk({ page: currentPage, limit: LIMIT }))
                .unwrap()
                .then(({ total }) => toast.success(`Total: ${total} users`))
    }, [dispatch, currentPage, total, users, page])

    const filterQuery = useMemo(() => query.get('filter'), [query])

    useEffect(() => {
        filterQuery ? dispatch(setFilter(filterQuery)) : dispatch(setFilter(''))
    }, [filterQuery, dispatch])

    useEffect(() => {
        !filterQuery && setFilterParams({})
    }, [filterQuery, setFilterParams])

    useEffect(() => {
        if (error) toast.error(error.message)
    }, [error])

    const loadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        <>
            {isLoading && <Loader />}
            {users && (
                <>
                    {profile && <Profile profile={profile} />}
                    <FilterForm
                        filterQuery={filter}
                        setFilterParams={setFilterParams}
                    />
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
