import React, { Component, createContext } from 'react'

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false,
        username: '',
    }

    toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                toggleAuth: this.toggleAuth,
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