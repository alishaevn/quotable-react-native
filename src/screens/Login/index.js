import React, { Component } from 'react'
import {
    Image,
    Text,
    TextInput,
    View,
} from 'react-native'

import Button from '../../components/Button'
import logo from '../../assets/images/logo.png'
import styles from './styles'

class Login extends Component {
    constructor() {
        super()
        this.state = {
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
        const { register } = this.state
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
                <Text style={styles.loginText}>
                    Email
                </Text>
                <TextInput
                    style={styles.inputField}
                    autoCapitalize={'none'}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <Text style={styles.loginText}>
                    Password
                </Text>
                <TextInput
                    style={styles.inputField}
                    maxLength={30}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
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