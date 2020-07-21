import React from 'react'
import { withRouter } from 'react-router-dom'

import SignIn from './signIn'
import SignUp from './signUp'

class Authenticator extends React.Component {
    state = {
        showSignIn: true
    }

    switchState = (showSignIn) => {
        this.setState({
            showSignIn
        })
    }

    render() {
        const {showSignIn} = this.state;
        return (
            <div>
                {
                    showSignIn ? (
                        <SignIn />
                    ) : (
                        <SignUp />
                    )
                }

                <p onClick={() => this.switchState(true)}>Sign In</p>
                <p onClick={() => this.switchState(false)}>Sign Up</p>
            </div>
        )
    }
}

export default withRouter(Authenticator)

