import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <h1>Here's your dashboard</h1>
                <Link to="/" label="Home">Home</Link>
            </div>
        )
    }
}

export default withRouter(Dashboard)