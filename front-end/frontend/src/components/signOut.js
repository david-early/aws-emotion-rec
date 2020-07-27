import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class SignOut extends React.Component {

    constructor() {
        super()
        this.signOut = this.signOut.bind(this);
    }

    async signOut() {
        try {
            await Auth.signOut();
            this.props.history.push('/auth')
        }
        catch (e) {
            console.log("Error signing out:", e)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.signOut} >Sign Out</button>
            </div>
        )
    }
}

export default withRouter(SignOut)