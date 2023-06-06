import { getUserDetails } from 'api/api'
import User from 'components/User/User'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const handleUsers = async () => {
            try {
                const users = await getUserDetails(id)
                setUser(users)
            } catch (error) {
                toast.error(error.message)
            }
        }
        handleUsers()
    }, [id])

    return user && <User user={user} />
}

export default UserDetailsPage
