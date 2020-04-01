import React, { useContext } from 'react'
import {
    Image,
    StatusBar,
    Text,
    View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AuthContext } from '../../contexts'
import Button from '../../components/Button'
import Input from '../../components/Input'
import logo from '../../assets/images/logo.png'
import styles from './styles'

const Login = () => {
    const {
        isAuthenticated,
        onLogin,
        onRegister,
        registering,
        toggleAuth,
        updateUser,
        user,
    } = useContext(AuthContext)
    const {
        email,
        name,
        password,
        username,
    } = user || {}

    let onPress
    let option
    let text

    if (registering) {
        onPress = () => onRegister()
        option = 'Click to login instead'
        text = 'Register'
    } else {
        onPress = () => onLogin()
        option = 'Click to register instead'
        text = 'Login'
    }

    if (!isAuthenticated) {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <StatusBar barStyle='light-content' />
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Input
                    autoCapitalize={'none'}
                    maxLength={50}
                    onChangeText={value => updateUser('email', value)}
                    keyboardType='email-address'
                    placeholder='Email'
                    secureTextEntry={false}
                    size={.75}
                    value={email}
                    returnKeyType='next'
                    textContentType='emailAddress'
                />
                <Input
                    autoCapitalize={'none'}
                    maxLength={20}
                    onChangeText={value => updateUser('password', value)}
                    placeholder='Password'
                    secureTextEntry={true}
                    size={.75}
                    value={password}
                    returnKeyType={registering ? 'next' : 'done'}
                    textContentType={registering ? 'newPassword' : 'password'}
                />
                {registering &&
                    <View style={styles.inputWrapper}>
                        <Input
                            autoCapitalize={'words'}
                            maxLength={20}
                            onChangeText={value => updateUser('name', value)}
                            placeholder='First Name'
                            secureTextEntry={false}
                            size={.35}
                            value={name}
                            returnKeyType='next'
                            textContentType='givenName'
                        />
                        <Input
                            autoCapitalize={'none'}
                            maxLength={20}
                            onChangeText={value => updateUser('username', value)}
                            placeholder='Username'
                            secureTextEntry={false}
                            size={.35}
                            value={username}
                            returnKeyType='done'
                            textContentType='username'
                        />
                    </View>
                }
                <Button
                    onPress={onPress}
                    text={text}
                />
                <Text
                    onPress={() => toggleAuth('registering')}
                    style={styles.optionText}
                >
                    {`${option}`}
                </Text>
            </KeyboardAwareScrollView>
        )
    }

    return null
}

export default Login