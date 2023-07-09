import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import UsersList from 'components/UserList/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersThunk } from 'store/users/thunks'
import { filterSelector, usersSelector } from 'store/users/selectors'
import FilterForm from 'components/Form/FilterForm'
import { setFilter } from 'store/users/userSlice'
import { useSearchParams } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const LIMIT = 10

const HomePage = () => {
    const [currentPage, setPage] = useState(1)
    const { items: users, total, page } = useSelector(usersSelector)
    const filter = useSelector(filterSelector)
    const [query, setFilterParams] = useSearchParams()
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

    const loadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        users && (
            <Stack>
                <Stack mb={3}>
                    <FilterForm
                        filterQuery={filter}
                        setFilterParams={setFilterParams}
                    />
                </Stack>
                <UsersList users={users} isDetails />
                {users.length < total && Boolean(users.length) && (
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ p: 2, mt: 4 }}
                        onClick={loadMore}
                    >
                        <Typography variant="h5">More...</Typography>
                    </Button>
                )}
            </Stack>
        )
    )
}

export default HomePage
