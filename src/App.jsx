import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import users from './users.json'

function App() {
    return (
        <Section title={'Users List'}>
            <UsersList users={users} />
        </Section>
    )
}

export default App
