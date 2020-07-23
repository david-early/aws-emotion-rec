import React from 'react'
import { withRouter } from 'react-router-dom'

import SignIn from './signIn'
import SignUp from './signUp'

class Authenticator extends React.Component {
    state = {
        showSignIn: true
    }

    switchState = (x) => {
        this.setState({
            showSignIn: x
        })
    }

    mouseEnter = (e) => {
        e.preventDefault();
        e.target.style.cursor = "pointer";
    }

    render() {
        const {showSignIn} = this.state;
        return (
            <div style={authenticatorStyle}>
                {
                    showSignIn ? (
                        <SignIn />
                    ) : (
                        <SignUp />
                    )
                }

                <button onMouseEnter={this.mouseEnter} style={ this.state.showSignIn ? activeMenuSwitchButton : menuSwitchButton} 
                        onClick={() => this.switchState(true)}>
                        Sign In
                </button>
                <button onMouseEnter={this.mouseEnter} style={ !this.state.showSignIn ? activeMenuSwitchButton : menuSwitchButton}
                        onClick={() => this.switchState(false)}>
                        Sign Up
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
        width: "50%",
        border: "none",
        borderTop: "1px solid",
        borderColor: "grey"
    },
    activeMenuSwitchButton : {
        height: "60px",
        background: "#e54f6d",
        width: "50%",
        border: "none",
        borderTop: "1px solid",
        borderColor: "grey"

    }
}

const { authenticatorStyle, menuSwitchButton, activeMenuSwitchButton } = styles

export default withRouter(Authenticator)

