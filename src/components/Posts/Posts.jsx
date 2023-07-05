import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { getPostsByUserId } from 'api/users'
import PostDetails from './PostDetails'

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

    return (
        posts && posts.map(post => <PostDetails key={post._id} post={post} />)
    )
}

export default Posts
