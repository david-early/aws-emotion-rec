import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class Banner extends React.Component {

    signOut = (e) => {
        e.preventDefault();
        Auth.signOut().then(() => {
            this.props.history.push("/auth")
        })
        .catch((error) => {
            console.log("Error signing out: ", error)
        })
    }



    render() {
        return (
            <div style={bannerStyle}>
                <Link to="/" label="Home"> <button className="bannerButton" style={{float: "left"}}>Home</button> </Link>
                <button className="bannerButton" onClick={this.signOut} style={{float: "right"}}>Sign Out</button> 
                <button className="bannerButton" style={{float: "right"}}>My Account</button>
                <button className="bannerButton" style={{float: "right"}}>Presentation History</button>
                <button className="callToActionBannerButton" style={{float: "left"}}>Create New Presentation</button>
            </div>
        )
    }
}

const styles = {
    bannerStyle: {
        width: "100%",
        backgroundColor: "#3f88c5",
        height: "60px",
        borderBottom: "solid 1px",
        borderColor: "#1b2f33",
        paddingTop: "10px",
        paddingBottom: "10px"
    },
}

const { bannerStyle } = styles;

export default withRouter(Banner);