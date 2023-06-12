import { useDispatch, useSelector } from 'react-redux'
import { getTodoSelector } from 'store/todos/selectors'
import { DeleteBtn, Li, List, StatusBtn } from './TodosPage.styled'
import { deleteTodo, changeCompleted } from 'store/todos/todoSlice'

const TodosPage = () => {
    const todos = useSelector(getTodoSelector)

    const dispatch = useDispatch()

    const handleDelete = id => dispatch(deleteTodo(id))

    const changeStatus = id => dispatch(changeCompleted(id))

    return (
        <List>
            {todos.map(({ id, todoName, completed }) => (
                <Li key={id} completed={completed}>
                    <div>
                        <h3>{todoName}</h3>
                        <p>{completed.toString()}</p>
                    </div>
                    {completed ? 'Completed' : 'Progress'}
                    <div>
                        <StatusBtn onClick={() => changeStatus(id)}>
                            Change status
                        </StatusBtn>
                        <DeleteBtn onClick={() => handleDelete(id)}>
                            X
                        </DeleteBtn>
                    </div>
                </Li>
            ))}
        </List>
    )
}

export default TodosPage
