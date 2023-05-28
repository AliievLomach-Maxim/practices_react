import { Component } from 'react'
import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import users from './users.json'
import Button from 'Button/Button'
import { nanoid } from 'nanoid'
import FormikForm from 'components/Form/FormikForm'
import Modal from 'components/Modal/Modal'

const USERS_KEY = 'USERS'

class App extends Component {
    state = {
        users: null,
        isShowForm: false,
        userDetails: null,
    }

    componentDidMount() {
        const localData = localStorage.getItem(USERS_KEY)
        localData && JSON.parse(localData).length > 0
            ? this.setState({ users: JSON.parse(localData) })
            : this.setState({ users })
    }

    componentDidUpdate(_, prevState) {
        if (prevState.users !== this.state.users)
            localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users))
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

    openDetails = user => {
        this.setState({ userDetails: user })
    }

    closeDetails = () => this.setState({ userDetails: null })

    render() {
        const { users, isShowForm, userDetails } = this.state
        return (
            <Section title={'Users List'}>
                {users && (
                    <UsersList
                        users={users}
                        deleteUsers={this.deleteUsers}
                        changeJobStatus={this.changeJobStatus}
                        openDetails={this.openDetails}
                    />
                )}
                {userDetails && (
                    <Modal
                        user={this.state.userDetails}
                        closeDetails={this.closeDetails}
                    />
                )}
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
