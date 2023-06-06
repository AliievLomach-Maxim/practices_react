import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { getPostsByUserId } from 'api/api'

const Posts = () => {
    const [posts, setPosts] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        getPosts(id)
    }, [id])

    const getPosts = async userId => {
        try {
            const { posts } = await getPostsByUserId(userId)
            setPosts(posts)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return posts && posts.map(({ id, title }) => <h4 key={id}>{title}</h4>)
}

export default Posts
