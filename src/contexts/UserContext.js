import React, { Component, createContext } from 'react'

class UserContextProvider extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        token: '',
        username: '',
    }

    //   updateState = (key, value) => this.setState({ [`${key}`]: value })

    render() {
        return (
            <UserContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore
export const UserContext = createContext()
export default UserContextProvider