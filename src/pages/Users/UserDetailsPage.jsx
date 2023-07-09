import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import User from 'components/User/User'
import { getUserDetails } from 'api/users'

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

    return user && <User user={user} width={600} />
}

export default UserDetailsPage
