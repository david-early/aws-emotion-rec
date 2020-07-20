import React, { Component } from 'react';
import Amplify, { Auth } from "aws-amplify";
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

class App extends Component {

  constructor() {
    super()
    this.state = {username: "", password: "", email: "", phone_number: ""}
    this.handleSignUp = this.handleSignUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  async handleSignUp(e) {
    e.preventDefault()
    const {username, password, email, phone_number} = this.state;
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email, 
          phone_number
        }
      })

      console.log(user);
    }

    catch (error) {
      console.log("Error signing up:", error);
    }
  }


  render() {
    return (
      <div>
        <h1>React test form</h1>
        <form onSubmit={this.handleSignUp}>
          <label>Username:</label>
          <input name="username" type="text" onChange={this.onChange}></input>
          <br></br>
          <label>Password:</label>
          <input name="password" type="password" onChange={this.onChange}></input>
          <br></br>

          <label>Email:</label>
          <input name="email" type="text" onChange={this.onChange}></input>
          <br></br>

          <label>Phone Number:</label>
          <input name="phone_number" type="text" onChange={this.onChange}></input>
          <br></br>

          <button onClick={this.handleSignUp}>Sign Up</button>

        </form>
      </div>
    )
  }

}

export default App;
