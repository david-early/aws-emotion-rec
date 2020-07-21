import React, { Component } from 'react';
import Amplify, { Auth } from "aws-amplify";
import awsconfig from './aws-exports'

import Router from './components/router'

Amplify.configure(awsconfig)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    )
  }
}

// class App extends Component {

//   constructor() {
//     super()
//     this.state = {username: "", 
//                   password: "", 
//                   email: "", 
//                   phone_number: "", 
//                   authenticationCode: "", 
//                   displayLogin: true, 
//                   displaySignUp: false,
//                   displayAuthentication: false
//                 }

//     this.handleSignUp = this.handleSignUp.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.handleSignIn = this.handleSignIn.bind(this);
//     this.confirmUser = this.confirmUser.bind(this);
//     this.transitionToSignUpScreen = this.transitionToSignUpScreen.bind(this);
//   }

//   onChange (e) {
//     this.setState({ [e.target.name]: e.target.value})
//   }

//   transitionToSignUpScreen() {
//     this.setState({displayLogin:false, displaySignUp: true, displayAuthentication: false})
//   }

//   transitionToUserConfirmation() {
//     this.setState({displayLogin:false, displaySignUp:false, displayAuthentication: true})
//   }

//   async handleSignIn(e) {
//     e.preventDefault();
//     const {username, password} = this.state;
//     try {
//       await Auth.signIn(username, password);
//       console.log("Signed in successfully");

//     } 
//     catch (error) {
//       console.log("Error logging in", error);
//     }
//   }

//   async handleSignUp(e) {
//     e.preventDefault()
//     const {username, password, email, phone_number} = this.state;
//     try {
//       const user = await Auth.signUp({
//         username,
//         password,
//         attributes: {
//           email, 
//           phone_number
//         }
//       })
//       this.transitionToUserConfirmation();
//       console.log(user);
//     }

//     catch (error) {
//       console.log("Error signing up:", error);
//     }
//   }

//   async confirmUser(e) {
//     e.preventDefault();

//     const {username, authenticationCode} = this.state;
//     try {
//       await Auth.confirmSignUp(username, authenticationCode);
//     }
//     catch (error) {
//       console.log("Error confirming user", error)
//     }
//   }


//   render() {
//     return (
//       <div>
//         {
//           this.state.displayAuthentication && (
//             <div>
//               <h2>Confirm User</h2>
//               <form onSubmit={this.confirmUser}>
//                 <label>Username:</label>
//                 <input value={this.state.username} name="username" type="text" onChange={this.onChange}></input>
//                 <br></br>

//                 <label>Authentication Code:</label>
//                 <input name="authenticationCode" type="text" onChange={this.onChange}></input>
//                 <br></br>

//                 <button onClick={this.confirmUser}>Enter</button>

//               </form>
//             </div>
//           )
//         }

//         {
//           this.state.displaySignUp && (
//             <div>
//               <h2>Sign Up</h2>
//               <form onSubmit={this.handleSignUp}>
//                 <label>Username:</label>
//                 <input name="username" type="text" onChange={this.onChange}></input>
//                 <br></br>
//                 <label>Password:</label>
//                 <input name="password" type="password" onChange={this.onChange}></input>
//                 <br></br>

//                 <label>Email:</label>
//                 <input name="email" type="text" onChange={this.onChange}></input>
//                 <br></br>

//                 <label>Phone Number:</label>
//                 <input name="phone_number" type="text" onChange={this.onChange}></input>
//                 <br></br>

//                 <button onClick={this.handleSignUp}>Sign Up</button>

//               </form>
//             </div>
//           )
//         }

//         { 
//           this.state.displayLogin && (
//           <div>
//             <h2>Sign In</h2>
//             <form onSubmit={this.handleSignIn}>
//               <label>Username:</label>
//               <input type="text" name="username" onChange={this.onChange}></input>
//               <br></br>

//               <label>Password:</label>
//               <input type="password" name="password" onChange={this.onChange}></input>
//               <br></br>

//               <button>Sign In</button>

//               <br></br>
//               <label style={{color: "#0645AD"}} onClick={this.transitionToSignUpScreen}>Don't have an account? Click here to sign up!</label>

//             </form>
//           </div>
//           )
//         }
//       </div>
//     )
//   }

// }

export default App;
