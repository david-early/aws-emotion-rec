import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

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
        authenticationConfirmed: false
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    signUp = () => {
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
        .catch(err => console.log('error signing up: ', err))
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

                            <button onClick={this.signUp}>Sign Up</button>
                        </div>
                    )   
                }
                {
                    showConfirmation && (
                        <div>
                            <p>Confirmation code sent to {this.state.email}</p>
                            <input name="authCode" placeholder="Authentication Code" onChange={this.onChange} />
                            <button onClick={this.confirmSignUp} >Confirm Sign Up</button>
                        </div>
                    )
                }
                {
                    this.state.authenticationConfirmed && (
                        <div>
                            <p>Authentication confirmed</p>
                            <p>Click the sign in option below to continue to sign in screen</p>
                        </div>
                    )
                }

            </div>
        )
    }

}

export default withRouter(SignUp)