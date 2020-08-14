import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import Banner from './banner'

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
            <div className="main">
                <Banner />
                <div style={postBannerStyle}>
                    <div style={postBannerHeader}>
                        <h2>Most Recent Presentation</h2>
                    </div>

                    <div style={postBannerButtons}>
                        <p>Presentation History</p>
                    </div>
                </div>

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

const styles = {
    postBannerStyle: {
        height: "80px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid",
        textAlign: "center"
    },
    postBannerButtons: {
        float: "right",
        height: "100%",
        width: "30%",
        borderLeft: "1px solid"
    },
    postBannerHeader: {
        width: "70%",
        height: "100%",
    }
}

const { postBannerStyle, postBannerButtons, postBannerHeader } = styles;

export default withRouter(Home)