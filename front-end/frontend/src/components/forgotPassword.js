import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import '../App.css'
import tick from '../images/greenTick.png'

class ForgotPassword extends React.Component {

    state = {
        forgotPasswordSubmit: false,
        limitExceededException: false,
        passwordSuccessfullyReset: false,
        deliveryMethod: "",
        destination: ""
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    forgotPassword = (e) => {
        e.preventDefault();
        Auth.forgotPassword(this.state.username).then((data) => {
            this.setState({deliveryMethod: data.CodeDeliveryDetails.DeliveryMedium,
                            destination: data.CodeDeliveryDetails.Destination,
                            forgotPasswordSubmit: true,
            })
        })
        .catch((error) => {
            if (error.code === "LimitExceededException") {
                this.setState({limitExceededException: true})
            }
        })
    }

    forgotPasswordSubmit = (e) => {
        e.preventDefault();
        Auth.forgotPasswordSubmit(this.state.username, this.state.verificationCode, this.state.newPassword).then((data) => {
            console.log(data);
            this.setState({passwordSuccessfullyReset: true, limitExceededException: false})
        })
    }

    render() {
        return (
            <div>
                <h1 className="authHeader">Forgot Password</h1>
                <form onSubmit={this.forgotPassword}>
                    <input className="authInput" name="username" placeholder="Username" type="text" onChange={this.onChange}></input>
                    <br></br>
                    <button className="authButton" type="submit">Send Verification Code</button>
                </form>

                {
                    this.state.forgotPasswordSubmit && (
                        <div>
                            <span>Recovery code sent via {this.state.deliveryMethod} to {this.state.destination}</span>
                            <form onSubmit={this.forgotPasswordSubmit}>
                                <input className="authInput" type="text" name="verificationCode" placeholder="Verification Code" onChange={this.onChange}></input>
                                <br></br>
                                <input className="authInput" type="password" name="newPassword" placeholder="New Password" onChange={this.onChange}></input>
                                <br></br>
                                <button className="authButton" type="submit">Reset Password</button>
                            </form>
                        </div>
                    )
                }
                {
                    this.state.limitExceededException && (
                        <div>
                            <span>Too many recent password reset attempts, please try again later</span>
                        </div>
                    )
                }
                {
                    this.state.passwordSuccessfullyReset && (
                        <div>
                            <img className="greenTickStyle" src={tick} alt="Password Reset Confirmed" />
                            <br></br>
                            <span>Password Reset Confirmed, click sign in below to continue to sign in menu</span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default withRouter(ForgotPassword)