import { useEffect, useState } from 'react'
import Button from 'components/Button/Button'
import SearchForm from 'components/Form/SearchForm'
import UsersList from 'components/UserList/UsersList'
import { toast } from 'react-hot-toast'
import { searchUser } from 'api/api'

const LIMIT = 10
const SKIP = 10

const UsersPage = () => {
    const [users, setUsers] = useState(null)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQuery = query => {
        setSearchQuery(query)
        setPage(1)
    }

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

    const loadMore = () => setPage(prev => prev + 1)

    return (
        <>
            <SearchForm handleSearchQuery={handleSearchQuery} />
            {users && (
                <>
                    <UsersList users={users} isDetails />
                    {users.length > LIMIT && (
                        <Button handleClick={loadMore} text={'more...'} />
                    )}
                </>
            )}
        </>
    )
}

export default UsersPage
