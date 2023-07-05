import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { rootSelector } from 'store/root/rootSelector'

const Error = () => {
    const { error } = useSelector(rootSelector)
    useEffect(() => {
        error && toast.error(error.error ?? error.message ?? error)
    }, [error])

    return null
}

export default Error
