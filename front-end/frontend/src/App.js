import React, { Component } from 'react';
import Amplify from "aws-amplify";
import awsconfig from './aws-exports'

import './App.css'

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

export default App;
