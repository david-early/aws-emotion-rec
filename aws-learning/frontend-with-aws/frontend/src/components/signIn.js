import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class SignIn extends React.Component {
    state = {
        username: "",
        password: "",
        authCode: "",
        userNotConfirmedException: false,
        incorrectPassword: false,
        userNotFoundException: false
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value }) 
    }

    signIn = () => {
        this.setState({userNotConfirmedException: false, incorrectPassword: false})
        Auth.signIn(this.state.username, this.state.password).then((user) => {
            this.props.history.push('/')
        })
        .catch((error) => { 
            console.log("Error signing in:", error)
            if (error.code === "UserNotConfirmedException") {
                this.setState({userNotConfirmedException: true}) 
            }
            else if (error.code === "NotAuthorizedException") {
                this.setState({incorrectPassword: true})
            }
            else if (error.code === "UserNotFoundException") {
                this.setState({userNotFoundException: true})
            }
        })
    }

    render() {
        return (
            <div>
                <input name="username" type="text" onChange={this.onChange} placeholder="username" />
                <input name="password" type="password" onChange={this.onChange} placeholder="password" />

                {
                    this.state.userNotConfirmedException && (
                        <div> 
                            <p>User not confirmed using email address</p>
                        </div>
                    )
                }
                {
                    this.state.incorrectPassword && (
                        <div>
                            <p>Incorrect password, please try again</p>    
                        </div>
                    )
                }
                {
                    this.state.userNotFoundException && (
                        <div>
                            <p>No user associated with username: {this.state.username}</p>
                            <p>Click the sign up button below to create an account</p>
                        </div>
                    )
                }

                <button onClick={this.signIn}>Sign In</button>
            </div>
        )
    }
}

export default withRouter(SignIn)