import React from 'react'
import { withRouter } from 'react-router-dom'

import SignIn from './signIn'
import SignUp from './signUp'
import ForgotPassword from './forgotPassword'

class Authenticator extends React.Component {
    state = {
        showSignIn: true,
        showSignUp: false,
        showForgotPassword: false
    }

    updateStateVariable = (stateVariable, value) => {
        this.setState({
            [stateVariable] : value
        })
    }

    mouseEnter = (e) => {
        e.preventDefault();
        e.target.style.cursor = "pointer";
    }

    render() {
        return (
            <div style={authenticatorStyle}>

                {
                    this.state.showSignIn && (
                        <SignIn />
                    )
                }

                {
                    this.state.showSignUp && (
                        <SignUp />
                    )
                }

                {
                    this.state.showForgotPassword && (
                        <ForgotPassword />
                    )
                }

                <button onMouseEnter={this.mouseEnter} style={ this.state.showSignIn ? activeMenuSwitchButton : menuSwitchButton} 
                        onClick={() => { 
                                this.updateStateVariable("showSignUp", false);
                                this.updateStateVariable("showSignIn", true);
                                this.updateStateVariable("showForgotPassword", false);
                            } }>
                        Sign In
                </button>
                <button onMouseEnter={this.mouseEnter} style={ this.state.showSignUp ? activeMenuSwitchButton : menuSwitchButton}
                        onClick={() => { 
                                this.updateStateVariable("showSignIn", false);
                                this.updateStateVariable("showSignUp", true); 
                                this.updateStateVariable("showForgotPassword", false);
                            }}>
                        Don't have an account? Sign Up here
                </button>

                <button onMouseEnter={this.mouseEnter} style={ this.state.showForgotPassword ? activeMenuSwitchButton : menuSwitchButton}
                        onClick={() => {
                            this.updateStateVariable("showForgotPassword", true);
                            this.updateStateVariable("showSignIn", false);
                            this.updateStateVariable("showSignUp", false);
                        }}>
                        Forgot Password
                </button>
            </div>
        )
    }
}

const styles = {
    authenticatorStyle: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        top: "150px",
        background: "white",
        position: "relative"
    },
    menuSwitchButton : {
        height: "60px",
        width: "33.3%",
        border: "none",
        borderTop: "1px solid",
        borderColor: "grey",
        fontSize: "15px"
    },
    activeMenuSwitchButton : {
        height: "60px",
        background: "#e54f6d",
        width: "33.3%",
        border: "none",
        borderTop: "1px solid",
        borderColor: "grey",
        fontSize: "15px"

    }
}

const { authenticatorStyle, menuSwitchButton, activeMenuSwitchButton } = styles

export default withRouter(Authenticator)

