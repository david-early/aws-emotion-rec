import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import '../App.css'

import AccountConfirmation from './accountConfirmation'

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


    signIn = (e) => {
        e.preventDefault();
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
            <div style={{background: "white", paddingBottom: "40px"}}>
                <h1 className="authHeader">Sign into your Account</h1>
                <form onSubmit={this.signIn}>
                    <input className="authInput" name="username" type="text" onChange={this.onChange} placeholder="Username" />
                    <br></br>
                    <input className="authInput" name="password" type="password" onChange={this.onChange} placeholder="Password" />
                    <br></br>

                    {
                        this.state.incorrectPassword && (
                            <div>
                                <p className="errorText">Incorrect password, please try again</p>    
                            </div>
                        )
                    }
                    {
                        this.state.userNotFoundException && (
                            <div>
                                <p className="errorText">No user associated with username: {this.state.username}</p>
                                <p className="errorText">Click the sign up button below to create an account</p>
                            </div>
                        )
                    }

                    <button type="submit" 
                            className="authButton"
                            onClick={this.signIn}>
                            Sign In
                    </button>

                </form>

                {
                    this.state.userNotConfirmedException && (
                        <div> 
                            <p className="errorText">User authentication not complete, enter authentication code below to complete account creation</p>
                            <AccountConfirmation username={this.state.username} />
                        </div>
                    )
                }

            </div>
        )
    }
}

export default withRouter(SignIn)