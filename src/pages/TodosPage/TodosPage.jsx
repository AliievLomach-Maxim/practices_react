import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction } from 'store/todos/actions'
import { getTodoSelector } from 'store/todos/selectors'
import { List } from './TodosPage.styled'

const TodosPage = () => {
    const todos = useSelector(getTodoSelector)

    const dispatch = useDispatch()

    const handleDelete = id => dispatch(deleteTodoAction(id))

    return (
        <List>
            {todos.map(({ id, todoName, completed }) => (
                <li key={id}>
                    <div>
                        <h3>{todoName}</h3>
                        <p>{completed.toString()}</p>
                    </div>
                    <button onClick={() => handleDelete(id)}>X</button>
                </li>
            ))}
        </List>
    )
}

export default TodosPage
