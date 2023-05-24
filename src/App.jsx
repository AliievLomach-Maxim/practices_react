import { Component } from 'react'
import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import users from './users.json'

class App extends Component {
    state = {
        users,
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

    render() {
        const { users } = this.state
        return (
            <Section title={'Users List'}>
                <UsersList
                    users={users}
                    deleteUsers={this.deleteUsers}
                    changeJobStatus={this.changeJobStatus}
                />
            </Section>
        )
    }
}

export default App
