import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import tick from '../images/greenTick.png'

import '../App.css'

class AccountConfirmation extends React.Component {

    constructor() {
        super()
        this.confirmSignUp = this.confirmSignUp.bind(this);
        this.resendAuthenticationCode = this.resendAuthenticationCode.bind(this);
        this.state = {
            authCode: "",
            authenticationConfirmed: false,
            authCodeResent: false
        }
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    async confirmSignUp(e) {
        e.preventDefault()
        console.log("username = ", this.props.username);
        console.log("authcode = ", this.state.authCode)
        try {
            await Auth.confirmSignUp(this.props.username, this.state.authCode)
            this.setState({authenticationConfirmed: true, authCodeResent: false})
        }
        catch (err) {
            console.log('error confirming signing up: ', err)
        }
    }

    async resendAuthenticationCode(e) {
        e.preventDefault()
        try {
            await Auth.resendSignUp(this.props.username);
            console.log("Code resent successfully")
            this.setState({authCodeResent: true})
        }
        catch(error) {
            console.log("Error resending code:", error)
        }
    }

    render() {
        return (
            <div>
                <br></br>

                <form onSubmit={this.confirmSignUp}>
                    <input className="authInput" style={{marginTop: "10px"}} name="authCode" placeholder="Authentication Code" onChange={this.onChange} />
                    <br></br>
                        <button className="accountConfirmationButton" type="submit" onClick={this.confirmSignUp} >Confirm Sign Up</button> 

                        <button className="accountConfirmationButton" onClick={this.resendAuthenticationCode} >Resend Authentication code</button>
                        <br></br>
                </form>

                {
                    this.state.authCodeResent && (
                        <div>
                            <p>Authentication Code resent</p>
                        </div>
                    )
                }

                {
                    this.state.authenticationConfirmed && (
                        <div style={{marginTop: "10px"}}>
                            <img className="greenTickStyle" src={tick} alt="Account confirmation success" />
                            <p>Account confirmation complete, click sign in to continue</p>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default withRouter(AccountConfirmation)