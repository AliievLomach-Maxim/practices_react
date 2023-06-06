import { getUsers } from 'api/api'
import Button from 'components/Button/Button'
import UsersList from 'components/UserList/UsersList'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const SKIP = 10
const LIMIT = 10

const HomePage = () => {
    const [users, setUsers] = useState(null)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        handleUsers(page)
    }, [page])

    const handleUsers = async pageNumber => {
        const skip = pageNumber * SKIP - LIMIT
        const toastId = toast.loading('Loading...')
        try {
            const { users, total } = await getUsers(skip, LIMIT)
            setTotal(total)
            setUsers(prev => (prev ? [...prev, ...users] : users))
            toast.success(`Total: ${total} users`, {
                id: toastId,
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const loadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        users && (
            <>
                <UsersList users={users} isDetails />
                {users.length < total && (
                    <Button handleClick={loadMore} text={'more...'} />
                )}
            </>
        )
    )
}

export default HomePage
