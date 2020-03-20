import React, { Component } from 'react'
import {
    Image,
    Text,
    View,
} from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import logo from '../../assets/images/logo.png'
import styles from './styles'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            register: true,
        }
    }

    onLogin = () => {
        const { email, password } = this.state;
        console.log('clicked the login button')
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //   .catch((error) => {
        //     const { code, message } = error;
        //     // The message contains the default Firebase string representation of the error
        //     if (code === 'auth/wrong-password') {
        //       alert('Wrong password.');
        //     } else {
        //       alert(message);
        //     }
        //   });
    }

    onRegister = () => {
        const { email, password } = this.state;
        console.log('clicked the register button')
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .catch((error) => {
        //     const { code, message } = error;
        //     // The message contains the default Firebase string representation of the error
        //     if (code === 'auth/weak-password') {
        //       alert('The password is too weak.');
        //     } else {
        //       alert(message);
        //     }
        //   });
    }

    render() {
        const {
            email,
            password,
            register,
        } = this.state
        let onPress
        let option
        let text

        if (register) {
            onPress = () => this.onRegister()
            option = 'Click here to Login'
            text = 'Register'
        } else {
            onPress = () => this.onLogin()
            option = 'Click here to Register'
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
                    secureTextEntry={false}
                    title='Email'
                    value={email}
                />
                <Input
                    autoCapitalize={'none'}
                    maxLength={30}
                    onChangeText={value => this.setState({ password: value })}
                    secureTextEntry={true}
                    title='Password'
                    value={password}
                />
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