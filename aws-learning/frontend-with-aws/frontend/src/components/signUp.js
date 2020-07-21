import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class SignUp extends React.Component {
    state = {
        username: "", 
        password: '',
        email: '',
        phone_number: '',
        authCode: '',
        showConfirmation: false
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

    confirmSignUp = () => {
        Auth.confirmSignUp(this.state.username, this.state.authCode)
        .then(() => this.props.history.push('/'))
        .catch(err => console.log('error confirming signing up: ', err))
    }

    render() {
        const { showConfirmation } = this.state
        return (
            <div>
                {
                    !showConfirmation && (
                        <div>
                            <input name="username" placeholder="username" onChange={this.onChange} />
                            <input name="password" placeholder="password" onChange={this.onChange} />
                            <input name="email" placeholder="email" onChange={this.onChange} />
                            <input name="phone_number" placeholder="Phone Number" onChange={this.onChange} />

                            <button onClick={this.signUp}>Sign Up</button>
                        </div>
                    )   
                }
                {
                    showConfirmation && (
                        <div>
                            <input name="authCode" placeholder="Authentication Code" onChange={this.onChange} />
                            <button onClick={this.confirmSignUp} >Confirm Sign Up</button>
                        </div>
                    )
                }

            </div>
        )
    }

}

export default withRouter(SignUp)