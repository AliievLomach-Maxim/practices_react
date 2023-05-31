import { Component } from 'react'
import Section from 'components/Section/Section'
import UsersList from './components/UserList/UsersList'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import { getUsers } from 'api/api'

class App extends Component {
    static limit = 10
    static skip = 10
    state = {
        users: null,
        isShowForm: false,
        userDetails: null,
        isShowUsers: false,
        page: 1,
        isLoading: false,
        error: '',
    }

    componentDidUpdate(_, prevState) {
        const { isShowUsers, page } = this.state
        if (
            isShowUsers &&
            (prevState.isShowUsers !== isShowUsers || prevState.page !== page)
        )
            this.handleUsers(page)

        if (!isShowUsers && prevState.isShowUsers !== isShowUsers)
            this.setState({ page: 1, users: null })
    }

    handleUsers = async page => {
        const skip = page * App.skip - App.limit
        this.setState({ isLoading: true })
        try {
            const { users } = await getUsers(skip, App.limit)
            this.setState(prev => ({
                users: prev.users ? [...prev.users, ...users] : users,
                isLoading: false,
            }))
        } catch (error) {
            this.setState({ error: error.message, isLoading: false })
        }
    }

    deleteUsers = userId => {
        this.setState(prev => ({
            users: prev.users.filter(({ id }) => id !== userId),
        }))
    }

    openDetails = user => {
        this.setState({ userDetails: user })
    }

    closeDetails = () => this.setState({ userDetails: null })

    toggleUsers = () => {
        this.setState(prev => ({ isShowUsers: !prev.isShowUsers }))
    }

    loadMore = () => {
        this.setState(prev => ({ page: prev.page + 1 }))
    }

    render() {
        const { users, userDetails, isShowUsers, isLoading, error } = this.state
        return (
            <Section title={'Users List'}>
                <Button
                    text={isShowUsers ? 'Hide Users' : 'Show Users'}
                    handleClick={this.toggleUsers}
                />

                {error && <h2>error</h2>}
                {isLoading && <h2>Loading...</h2>}

                {users && (
                    <>
                        <UsersList
                            users={users}
                            deleteUsers={this.deleteUsers}
                            openDetails={this.openDetails}
                        />
                        <Button handleClick={this.loadMore} text={'more...'} />
                    </>
                )}

                {userDetails && (
                    <Modal
                        user={this.state.userDetails}
                        closeDetails={this.closeDetails}
                    />
                )}
            </Section>
        )
    }
}

export default App
