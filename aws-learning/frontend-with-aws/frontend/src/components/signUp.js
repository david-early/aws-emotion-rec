import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import AccountConfirmation from './accountConfirmation'

class SignUp extends React.Component {

    constructor() {
        super()
        this.confirmSignUp = this.confirmSignUp.bind(this)
    }

    state = {
        username: "", 
        password: '',
        email: '',
        phone_number: '',
        authCode: '',
        showConfirmation: false,
        authenticationConfirmed: false,
        passwordInvalidParameter: false
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    signUp = () => {
        this.setState({passwordInvalidParameter: false})
        const { username, password, email, phone_number } = this.state
        Auth.signUp({
          username,
          password,
          attributes: {
            email,
            phone_number
          }
        })
        .then(() => this.setState({ showConfirmation: true }))
        .catch((err) => { 
            console.log('error signing up: ', err)
            if (err.code === "InvalidParameterException") {
                this.setState({passwordInvalidParameter: true})
            }
        })
      }

    async confirmSignUp() {
        try {
            await Auth.confirmSignUp(this.state.username, this.state.authCode)
            this.setState({authenticationConfirmed: true})
        }
        catch (err) {
            console.log('error confirming signing up: ', err)
        }
    }

    render() {
        const { showConfirmation } = this.state
        return (
            <div>
                {
                    !showConfirmation && (
                        <div>
                            <input name="username" placeholder="username" type="text" onChange={this.onChange} />
                            <input name="password" placeholder="password" type="password" onChange={this.onChange} />
                            <input name="email" placeholder="email" type="text" onChange={this.onChange} />
                            <input name="phone_number" placeholder="Phone Number" type="text" onChange={this.onChange} />

                            {
                                this.state.passwordInvalidParameter && (
                                    <div>
                                        <p>Password invalid, password must be</p>
                                        <ul>
                                            <li>At least 6 characters in length</li>
                                        </ul>
                                    </div>
                                )
                            }

                            <button onClick={this.signUp}>Sign Up</button>
                        </div>
                    )   
                }
                {
                    showConfirmation && (
                        <div>
                            <p>Confirmation code sent to {this.state.email}</p>
                            <AccountConfirmation username={this.state.username} />
                        </div>
                    )
                }

            </div>
        )
    }

}

export default withRouter(SignUp)