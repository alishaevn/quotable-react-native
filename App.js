import React, { Component } from 'react'

import Home from './src/components/Home'
import Login from './src/screens/Login'

export default class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     loading: true,
  //     user: false,
  //   }
  // }

  // componentDidMount() {
  //   this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({
  //       loading: false,
  //       user,
  //     })
  //   })
  // }

  // componentWillUnmount() {
  //   this.authSubscription();
  // }

  render() {
    // if (this.state.loading) return null // The application is loading
    // if (this.state.user) return <Home /> // The user is logged in (not null) so redirect Home
    return <Login /> // The user is logged out (null) so redirect to the login page
  }
}