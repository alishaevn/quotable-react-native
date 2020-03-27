import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import Login from './src/screens/Login'
import Tabs from './src/navigation'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null,
        }
    }

    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem('user')
            this.setState({ user })
        } catch(error) {
            console.log('failed to load the "user" from asyncstorage because:', error)
        }
    }

    updateState = user => this.setState({ user })

    render() {
        const { user } = this.state

        return (
            user
                ? <Tabs updateState={this.updateState} />
                : <Login updateState={this.updateState} />
        )
    }
}