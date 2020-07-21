import React, { Component } from 'react';
import Amplify, { Auth } from "aws-amplify";
import { Route, Redirect, withRouter, Switch, BrowserRouter as Router } from 'react-router-dom'

import Authenticator from './authenticator'
import Dashboard from './dashboard'
import Home from './home'

class PrivateRoute extends Component {
    state = {
        loaded: false,
        isAuthenticated: false
    }

    componentDidMount() {
        this.authenticate()
        this.unlisten = this.props.history.listen(() => {
            Auth.currentAuthenticatedUser()
              .then(user => console.log('user: ', user))
              .catch(() => {
                if (this.state.isAuthenticated) this.setState({ isAuthenticated: false })
              })
          });
    }

    componentWillUnmount() {
        this.unlisten()
    }

    authenticate() {
        Auth.currentAuthenticatedUser().then(() => {
            this.setState({ loaded: true, isAuthenticated: true})
        })
        .catch(() => {
            this.props.history.push("/auth")
        })
    }

    render() {
        const { component: Component, ...rest } = this.props
        const { loaded , isAuthenticated} = this.state
        if (!loaded) return null
        return (
          <Route
            {...rest}
            render={props => {
              return isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/auth",
                  }}
                />
              )
            }}
          />
        )
    }

}

PrivateRoute = withRouter(PrivateRoute)

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/auth' component={Authenticator} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/' component={Home} />
        </Switch>
    </Router>
)

export default Routes
