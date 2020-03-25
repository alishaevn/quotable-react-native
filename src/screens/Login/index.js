import React, { Component } from 'react'
import {
    Alert,
    Image,
    Text,
    View,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

import Button from '../../components/Button'
import Input from '../../components/Input'
import logo from '../../assets/images/logo.png'
import styles from './styles'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: '',
            password: '',
            register: true,
            username: '',
        }
    }

    onLogin = () => {
        console.log('clicked the login button')
    }

    onRegister = () => {
        const {
            email,
            name,
            password,
            username,
        } = this.state
        const { updateState } = this.props

        if (!email || !name || !password || !username) {
            Alert.alert('Please fill in all fields!')
        }

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
                const user = {
                    email,
                    name,
                    username,
                }

                try {
                    await AsyncStorage.setItem('user', JSON.stringify(user))
                    updateState(user)
                } catch (error) {
                    console.log('failed to save the user to async storage because:', error)
                }
            })
            .catch(error => console.log('failed to create the user because', error))
    }

    render() {
        const {
            email,
            name,
            password,
            register,
            username,
        } = this.state
        let onPress
        let option
        let text

        if (register) {
            onPress = () => this.onRegister()
            option = 'Click to login instead'
            text = 'Register'
        } else {
            onPress = () => this.onLogin()
            option = 'Click to register instead'
            text = 'Login'
        }

        return (
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Input
                    autoCapitalize={'none'}
                    maxLength={50}
                    onChangeText={value => this.setState({ email: value })}
                    keyboardType='email-address'
                    placeholder='Email'
                    secureTextEntry={false}
                    size={.75}
                    value={email}
                />
                <Input
                    autoCapitalize={'none'}
                    maxLength={20}
                    onChangeText={value => this.setState({ password: value })}
                    placeholder='Password'
                    secureTextEntry={true}
                    size={.75}
                    value={password}
                />
                {register &&
                    <View style={styles.inputWrapper}>
                        <Input
                            autoCapitalize={'words'}
                            maxLength={20}
                            onChangeText={value => this.setState({ name: value })}
                            placeholder='First Name'
                            secureTextEntry={false}
                            size={.35}
                            value={name}
                        />
                        <Input
                            autoCapitalize={'none'}
                            maxLength={20}
                            onChangeText={value => this.setState({ username: value })}
                            placeholder='Username'
                            secureTextEntry={false}
                            size={.35}
                            value={username}
                        />
                    </View>
                }
                <Button
                    onPress={onPress}
                    text={text}
                />
                <Text
                    onPress={() => this.setState({ register: !register })}
                    style={styles.optionText}
                >
                    {`${option}`}
                </Text>
            </View>
        )
    }
}

export default Login