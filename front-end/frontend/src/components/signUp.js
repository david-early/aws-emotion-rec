import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import '../App.css'

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
        countryCode: '+353',
        sevenDigitPhoneNumber: '',
        authCode: '',
        showConfirmation: false,
        authenticationConfirmed: false,
        passwordTooShort: false,
        phoneNumberIncorrectFormat: false
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    signUp = (e) => {
        e.preventDefault()
        this.setState({passwordTooShort: false, phoneNumberIncorrectFormat: false})
        const { username, password, email, countryCode, sevenDigitPhoneNumber } = this.state
        const phone_number = countryCode + sevenDigitPhoneNumber;
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
            if (err.message.includes("Member must have length greater than or equal to 6")) {
                this.setState({passwordTooShort: true})
            }
            else if (err.message.includes("Invalid phone number format")) {
                this.setState({phoneNumberIncorrectFormat: true})
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
                <h1 className="authHeader">Sign Up for Account</h1>
                {
                    !showConfirmation && (
                        <div>
                            <form onSubmit={this.signUp}>
                                <input className="authInput" name="username" placeholder="Username" type="text" onChange={this.onChange} />
                                <br></br>
                                <input className="authInput" name="password" placeholder="Password" type="password" onChange={this.onChange} />
                                <br></br>

                                {
                                    this.state.passwordTooShort && (
                                        <div>
                                            <p className="errorText">Password invalid, password must be</p>
                                            <ul>
                                                <li className="errorText">At least 6 characters in length</li>
                                            </ul>
                                        </div>
                                    )
                                }

                                <input className="authInput" name="email" placeholder="Email" type="text" onChange={this.onChange} />
                                <br></br>
                                <div style={{marginTop: "35px", width:"414px", marginLeft:"auto", marginRight:"auto"}}>
                                    <select style={{width:"75px", marginRight:"10px", height:"44px", float:"left"}} name="countryCode" value={this.state.countryCode}
                                            onChange={this.onChange}>
                                        <option value="+353">+353</option>
                                        <option value="+44">+44</option>
                                    </select>
                                    <input style={{float:"left", width:"314px"}} name="sevenDigitPhoneNumber" placeholder="Phone Number" type="text" onChange={this.onChange} />
                                    <br></br>
                                </div>



                                <button type="submit" className="authButton" onClick={this.signUp}>Sign Up</button>
                            </form>
                            {
                                this.state.phoneNumberIncorrectFormat && (
                                    <div>
                                        <p className="errorText">Phone number incorrectly formatted</p>
                                    </div>
                                )
                            }
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