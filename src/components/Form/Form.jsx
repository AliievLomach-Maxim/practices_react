import { Component } from 'react'

class Form extends Component {
    state = { name: '', email: '' }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser({ ...this.state })
        this.setState({ name: '', email: '' })
        this.props.closeForm()
    }

    render() {
        const { name, email } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <button>Save</button>
            </form>
        )
    }
}

export default Form
