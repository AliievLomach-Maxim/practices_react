import { Component } from 'react'
import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import users from './users.json'
import Form from 'components/Form/Form'
import Button from 'Button/Button'
import { nanoid } from 'nanoid'
import FormikForm from 'components/Form/FormikForm'

class App extends Component {
    state = {
        users,
        isShowForm: false,
    }

    deleteUsers = userId => {
        this.setState(prev => ({
            users: prev.users.filter(({ id }) => id !== userId),
        }))
    }

    changeJobStatus = userId => {
        this.setState(prev => ({
            users: prev.users.map(user =>
                user.id === userId ? { ...user, hasJob: !user.hasJob } : user
            ),
        }))
    }

    openForm = () => {
        this.setState({ isShowForm: true })
    }

    addUser = data => {
        const newUser = {
            id: nanoid(),
            hasJob: false,
            ...data,
        }
        this.setState(prev => ({ users: [...prev.users, newUser] }))
    }

    closeForm = () => {
        this.setState({ isShowForm: false })
    }

    render() {
        const { users, isShowForm } = this.state
        return (
            <Section title={'Users List'}>
                <UsersList
                    users={users}
                    deleteUsers={this.deleteUsers}
                    changeJobStatus={this.changeJobStatus}
                />
                {/* {isShowForm ? (
                        <Form closeForm={this.closeForm} addUser={this.addUser} />
                    ) : (
                        <Button text="Open Form" handleClick={this.openForm} />
                    )} */}
                {isShowForm ? (
                    <FormikForm
                        closeForm={this.closeForm}
                        addUser={this.addUser}
                    />
                ) : (
                    <Button text="Open Form" handleClick={this.openForm} />
                )}
            </Section>
        )
    }
}

export default App
