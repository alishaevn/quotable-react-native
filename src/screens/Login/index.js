import React, { Component} from 'react'
import {
  Image,
  Text,
  TextInput,
  View,
} from 'react-native'

import Button from '../../components/Button'
import styles from './styles'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      registering: false,
      button: 'login'
    }
  }

  onLogin = () => {
  const { email, password } = this.state;
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
    const { button, registering } = this.state
    let registerMessage
    let onPress
    let text

    if (button === 'Login') {
      text = 'Login'
      onPress = () => this.onLogin()
    } else {
      text = 'Register'
      onPress = () => this.onRegister()
    }

    if(this.state.registering) {
      button = (<Button
          onPress={() => this.onRegister()}
          title="Register"
          accessibilityLabel="Register for Quotable"
          style={styles.loginButton}
        />)
        registerMessage = (
        <Text
          onPress={() => this.setState({registering: false})}
          style={styles.registerMessage}
        >
          Click here to Login
        </Text>)
    } else {
      button = (<Button
          onPress={() => this.onLogin()}
          title="Login"
          accessibilityLabel="Log in to Quotable"
          style={styles.loginButton}
        />)
      registerMessage = (
        <Text
          onPress={() => this.setState({registering: true})}
          style={styles.registerMessage}
        >
          Click here to register
        </Text>)
    }

    return(
      <View style={styles.loginPage}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo} />

        <Text style={styles.loginText}>Email</Text>
        <TextInput
          style={styles.inputField}
          autoCapitalize={'none'}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />

        <Text style={styles.loginText}>Password</Text>
        <TextInput
          style={styles.inputField}
          maxLength={30}
          secureTextEntry={true}
          autoCapitalize={'none'}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <Button
          onPress={onPress}
          text={text}
        />
        { registerMessage }

      </View>
    )
  }
}

export default Login

/*
Resources:
  - https://facebook.github.io/react-native/docs/components-and-apis.html
*/