import React, { Component, createContext } from 'react'
import { Alert } from 'react-native'
import axios from 'axios'

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
        // debugger

        axios.post('http://localhost:3000/auth/login', {
            email,
            password,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(async response => {
                // debugger
                const {
                    email,
                    name,
                    token,
                    username,
                } = response.data

                try {
                    this.updateUser('email', email)
                    this.updateUser('name', name)
                    this.updateUser('token', token)
                    this.updateUser('username', username)
                    this.toggleAuth('isAuthenticated')
                } catch (error) {
                    console.log('failed to save the user or token to async storage because:', error)
                }
            })
            .catch(error => console.log('failed to log the user in because:', error))
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                onLogin: this.onLogin,
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