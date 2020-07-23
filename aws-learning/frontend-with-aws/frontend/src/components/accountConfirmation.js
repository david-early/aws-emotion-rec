import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

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

    async confirmSignUp() {
        console.log("username = ", this.props.username);
        console.log("authcode = ", this.state.authCode)
        try {
            await Auth.confirmSignUp(this.props.username, this.state.authCode)
            this.setState({authenticationConfirmed: true})
        }
        catch (err) {
            console.log('error confirming signing up: ', err)
        }
    }

    async resendAuthenticationCode() {
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
                {
                    this.state.authCodeResent && (
                        <div>
                            <p>Authentication Code resent</p>
                        </div>
                    )
                }
                <input name="authCode" placeholder="Authentication Code" onChange={this.onChange} />
                <br></br>
                <button onClick={this.confirmSignUp} >Confirm Sign Up</button> 
                <br></br>

                <button onClick={this.resendAuthenticationCode} >Resend Authentication code</button>
                <br></br>

                {
                    this.state.authenticationConfirmed && (
                        <div>
                            <p>Account confirmation complete, click sign in below to continue sign in</p>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default withRouter(AccountConfirmation)