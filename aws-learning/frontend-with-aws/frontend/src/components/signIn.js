import React from 'react'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import AccountConfirmation from './accountConfirmation'

class SignIn extends React.Component {
    
    state = {
        username: "",
        password: "",
        authCode: "",
        userNotConfirmedException: false,
        incorrectPassword: false,
        userNotFoundException: false
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value }) 
    }


    signIn = (e) => {
        e.preventDefault();
        this.setState({userNotConfirmedException: false, incorrectPassword: false})
        Auth.signIn(this.state.username, this.state.password).then((user) => {
            this.props.history.push('/')
        })
        .catch((error) => { 
            console.log("Error signing in:", error)
            if (error.code === "UserNotConfirmedException") {
                this.setState({userNotConfirmedException: true}) 
            }
            else if (error.code === "NotAuthorizedException") {
                this.setState({incorrectPassword: true})
            }
            else if (error.code === "UserNotFoundException") {
                this.setState({userNotFoundException: true})
            }
        })
    }

    render() {
        return (
            <div style={{background: "white"}}>
                <h1 style={{paddingTop: "40px", marginBottom:"0px"}}>Sign into your account</h1>
                <form onSubmit={this.signIn}>
                <input style={authInputs} name="username" type="text" onChange={this.onChange} placeholder="Username" />
                <br></br>
                <input style={authInputs} name="password" type="password" onChange={this.onChange} placeholder="Password" />
                <br></br>

                {
                    this.state.userNotConfirmedException && (
                        <div> 
                            <p>User authentication not complete, enter authentication code below to complete account creation</p>
                            <AccountConfirmation username={this.state.username} />
                        </div>
                    )
                }
                {
                    this.state.incorrectPassword && (
                        <div>
                            <p>Incorrect password, please try again</p>    
                        </div>
                    )
                }
                {
                    this.state.userNotFoundException && (
                        <div>
                            <p>No user associated with username: {this.state.username}</p>
                            <p>Click the sign up button below to create an account</p>
                        </div>
                    )
                }

                <button type="submit" style={{marginTop: "35px", 
                                marginBottom:"35px", 
                                width:"400px", 
                                height:"50px", 
                                fontSize:"20px",
                                backgroundColor:"#1b2f33",
                                color:"white"
                            }} 
                        onClick={this.signIn}>
                        Sign In
                </button>


                </form>

            </div>
        )
    }
}

const styles = {
    authInputs : {
        marginTop: "40px",
        width: "400px",
    }
}

const { authInputs } = styles

export default withRouter(SignIn)