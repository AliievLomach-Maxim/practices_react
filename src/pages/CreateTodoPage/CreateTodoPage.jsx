import { Form } from 'components/Form/SearchForm.styled'
import { nanoid } from 'nanoid'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodoAction } from 'store/todos/actions'

const CreateTodoPage = () => {
    const [todoName, setTodoName] = useState('')

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const handleChange = ({ target: { value } }) => {
        setTodoName(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(
            createTodoAction({
                id: nanoid(),
                todoName,
                completed: false,
            })
        )
        setTodoName('')
        inputRef.current.focus()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                <input
                    ref={inputRef}
                    placeholder="Todo name"
                    type="text"
                    name="todo"
                    onChange={handleChange}
                    value={todoName}
                />
            </label>
            <button>Create</button>
        </Form>
    )
}

export default CreateTodoPage
