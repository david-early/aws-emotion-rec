import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class SignIn extends React.Component {
    state = {
        username: "",
        password: "",
        authCode: ""
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value }) 
    }

    signIn = () => {
        Auth.signIn(this.state.username, this.state.password).then((user) => {
            this.props.history.push('/')
        })
        .catch(error => console.log("Error signing in", error))
    }

    render() {
        return (
            <div>
                <input name="username" onChange={this.onChange} placeholder="username" />
                <input name="password" onChange={this.onChange} placeholder="password" />

                <button onClick={this.signIn}>Sign In</button>
            </div>
        )
    }
}

export default withRouter(SignIn)