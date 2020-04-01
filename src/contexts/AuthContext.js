import React, { Component, createContext } from 'react'
import { Alert } from 'react-native'

import { login, register } from '../utilities/apiCalls'

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false,
        registering: false,
        user: null,
    }

    onLogin = () => {
        const { user } = this.state
        const { password } = user
        let { email } = user

        if (!email || !password) {
            Alert.alert('Please fill in all fields!')
        }
        email = email.toLowerCase()

        login(email, password, this.updateUser, this.toggleAuth)
    }

    onLogout = () => {
        this.toggleAuth('isAuthenticated')
        this.setState({ user: null })
    }

    onRegister = () => {
        const { user } = this.state
        const {
            name,
            password,
            username,
        } = user
        let { email } = user

        if (!email || !name || !password || !username) {
            Alert.alert('Please fill in all fields!')
        }
        email = email.toLowerCase()

        register(email, name, password, this.updateUser, username, this.toggleAuth)
    }

    toggleAuth = value => this.setState({ [`${value}`]: !this.state[`${value}`] })

    updateUser = (key, value) => this.setState({ user: { ...this.state.user, [`${key}`]: value } })

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                onLogin: this.onLogin,
                onLogout: this.onLogout,
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