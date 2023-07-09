import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import { searchUser } from 'api/users'
import SearchForm from 'components/Form/SearchForm'
import UsersList from 'components/UserList/UsersList'
import { Button, Stack, Typography } from '@mui/material'

const LIMIT = 10

const UsersPage = () => {
    const [users, setUsers] = useState(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    const searchQuery = useMemo(
        () => searchParams.get('search') ?? '',
        [searchParams]
    )

    const handleSearchQuery = () => {
        setPage(1)
        setSearch(searchQuery)
    }

    useEffect(() => {
        !searchQuery && setSearchParams({})
    }, [searchQuery, setSearchParams])

    const getSearchResult = async (searchQuery, pageNumber) => {
        const toastId = toast.loading('Loading...')
        try {
            const { users, total } = await searchUser(
                searchQuery,
                pageNumber,
                LIMIT
            )
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
        search && getSearchResult(search, page)
    }, [search, page])

    const loadMore = () => setPage(prev => prev + 1)

    return (
        <Stack>
            <Stack mb={3}>
                <SearchForm
                    handleSearchQuery={handleSearchQuery}
                    searchQuery={searchQuery}
                    setSearchParams={setSearchParams}
                />
            </Stack>
            {users && (
                <>
                    <UsersList users={users} isDetails />
                    {users.length > LIMIT && (
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ p: 2, mt: 4 }}
                            onClick={loadMore}
                        >
                            <Typography variant="h5">More...</Typography>
                        </Button>
                    )}
                </>
            )}
        </Stack>
    )
}

export default UsersPage
