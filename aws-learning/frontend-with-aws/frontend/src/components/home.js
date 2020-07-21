import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class Home extends React.Component {
    state = {
        username: ""
    }

    componentDidMount() {
        Auth.currentUserInfo().then((data) => {
            this.setState({
                username: data.username
            })
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome home {this.state.username}</h1>
                <Link to="/dashboard" label="dashboard" >Dashboard</Link>
                <p onClick={() => {
                    Auth.signOut().then(() => {
                        this.props.history.push("/auth")
                    })
                    .catch((error) => {
                        console.log("Error signing out:", error)
                    })
                }}>Sign Out</p>
            </div>
        )
    }
}

export default withRouter(Home)