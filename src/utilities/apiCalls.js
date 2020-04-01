import axios from 'axios'

export const login = (email, password, updateUser, toggleAuth) => {
    axios.post('http://localhost:3000/auth/login', {
        email,
        password,
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            const {
                email,
                name,
                token,
                username,
            } = response.data

            try {
                updateUser('email', email)
                updateUser('name', name)
                updateUser('token', token)
                updateUser('username', username)
                toggleAuth('isAuthenticated')
            } catch (error) {
                console.log('failed to save the user or token to async storage because:', error)
            }
        })
        .catch(error => console.log('failed to log the user in because:', error))
}

export const register = (email, name, password, updateUser, username, toggleAuth) => {
    axios.post('http://localhost:3000/users', {
        email,
        name,
        password,
        username,
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(async response => {
            const {
                email,
                name,
                username,
            } = response.data

            try {
                updateUser('email', email)
                updateUser('name', name)
                updateUser('username', username)
                toggleAuth('isAuthenticated')
            } catch (error) {
                console.log('failed to save the user to async storage because:', error)
            }
        })
        .catch(error => console.log('failed to create the user because', error))
}