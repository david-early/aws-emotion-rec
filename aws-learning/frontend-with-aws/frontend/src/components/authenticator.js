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

                <button style={ this.state.showSignIn ? activeMenuSwitchButton : menuSwitchButton} onClick={() => this.switchState(true)}>Sign In</button>
                <button style={ !this.state.showSignIn ? activeMenuSwitchButton : menuSwitchButton} onClick={() => this.switchState(false)}>Sign Up</button>
            </div>
        )
    }
}

const styles = {
    authenticatorStyle: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px solid"
    },
    menuSwitchButton : {
        width: "50%",
        border: "none"
    },
    activeMenuSwitchButton : {
        background: "lightgrey",
        width: "50%",
        border: "none"
    }
}

const { authenticatorStyle, menuSwitchButton, activeMenuSwitchButton } = styles

export default withRouter(Authenticator)

