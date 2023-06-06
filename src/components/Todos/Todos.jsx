import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { getTodosByUserId } from 'api/api'

const Todos = () => {
    const [todos, setTodos] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        getTodos(id)
    }, [id])

    const getTodos = async userId => {
        try {
            const { todos } = await getTodosByUserId(userId)
            setTodos(todos)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return todos && todos.map(({ id, todo }) => <h4 key={id}>{todo}</h4>)
}

export default Todos
