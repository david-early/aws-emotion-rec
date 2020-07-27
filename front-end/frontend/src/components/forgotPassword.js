import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import '../App.css'

class ForgotPassword extends React.Component {

    render() {
        return (
            <div>
                <h1>Here's your forgot password screen</h1>
            </div>
        )
    }
}

export default withRouter(ForgotPassword)