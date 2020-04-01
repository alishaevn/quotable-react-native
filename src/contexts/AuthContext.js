import React, { Component, createContext } from 'react'
import { Alert } from 'react-native'

import { login, register } from '../utilities/apiCalls'

class AuthContextProvider extends Component {
    state = {
        email: '',
        isAuthenticated: false,
        name: '',
        password: '',
        registering: false,
        token: '',
        username: '',
    }

    toggleAuth = value => this.setState({ [`${value}`]: !this.state[`${value}`] })

    updateUser = (key, value) => this.setState({ [`${key}`]: value })

    onLogin = () => {
        const { password } = this.state
        let { email } = this.state

        if (!email || !password) {
            Alert.alert('Please fill in all fields!')
        }
        email = email.toLowerCase()

        login(email, password, this.updateUser, this.toggleAuth)
    }

    onRegister = () => {
        const {
            name,
            password,
            username,
        } = this.state
        let { email } = this.state

        if (!email || !name || !password || !username) {
            Alert.alert('Please fill in all fields!')
        }
        email = email.toLowerCase()

        register(email, name, password, this.updateUser, username, this.toggleAuth)
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                onLogin: this.onLogin,
                onRegister: this.onRegister,
                toggleAuth: this.toggleAuth,
                updateUser: this.updateUser,
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore
export const AuthContext = createContext()
export default AuthContextProvider