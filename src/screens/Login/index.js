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
        email,
        isAuthenticated,
        name,
        onLogin,
        password,
        registering,
        toggleAuth,
        updateUser,
        username,
    } = useContext(AuthContext)

    let onPress
    let option
    let text

    if (registering) {
        onPress = () => this.onRegister()
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



// class Login extends Component {


//     onRegister = () => {
//         const {
//             name,
//             password,
//             username,
//         } = this.state
//         let { email } = this.state
//         const { updateState } = this.props

//         if (!email || !name || !password || !username) {
//             Alert.alert('Please fill in all fields!')
//         }
//         email = email.toLowerCase()

//         axios.post('http://localhost:3000/users', {
//             email,
//             name,
//             password,
//             username,
//         }, {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })
//             .then(async response => {
//                 const {
//                     email,
//                     name,
//                     username,
//                 } = response.data
//                 const user = {
//                     email,
//                     name,
//                     username,
//                 }

//                 try {
//                     await AsyncStorage.setItem('user', JSON.stringify(user))
//                     updateState(user)
//                 } catch (error) {
//                     console.log('failed to save the user to async storage because:', error)
//                 }
//             })
//             .catch(error => console.log('failed to create the user because', error))
//     }


//     render() {
//         const { isAuthenticated, toggleAuth } = useContext(AuthContext)
//         const {
//             email,
//             name,
//             password,
//             token,
//             username,
//         } = useContext(UserContext)
//         console.log('context values::', {
//             email,
//             name,
//             password,
//             token,
//             username,
//             isAuthenticated,
//             toggleAuth,
//         })
//         // const {
//         //     email,
//         //     name,
//         //     password,
//         //     register,
//         //     username,
//         // } = this.state
//         // let onPress
//         // let option
//         // let text

//         // if (register) {
//         //     onPress = () => this.onRegister()
//         //     option = 'Click to login instead'
//         //     text = 'Register'
//         // } else {
//         //     onPress = () => this.onLogin()
//         //     option = 'Click to register instead'
//         //     text = 'Login'
//         // }

//         return (
//             <KeyboardAwareScrollView
//                 resetScrollToCoords={{ x: 0, y: 0 }}
//                 contentContainerStyle={styles.container}
//                 scrollEnabled={false}
//             >
//                 <StatusBar barStyle='light-content' />
//                 <Image
//                     source={logo}
//                     style={styles.logo}
//                 />
//                 <Input
//                     autoCapitalize={'none'}
//                     maxLength={50}
//                     onChangeText={value => this.setState({ email: value })}
//                     keyboardType='email-address'
//                     placeholder='Email'
//                     secureTextEntry={false}
//                     size={.75}
//                     value={email}
//                     returnKeyType='next'
//                     textContentType='emailAddress'
//                 />
//                 <Input
//                     autoCapitalize={'none'}
//                     maxLength={20}
//                     onChangeText={value => this.setState({ password: value })}
//                     placeholder='Password'
//                     secureTextEntry={true}
//                     size={.75}
//                     value={password}
//                     returnKeyType={register ? 'next' : 'done'}
//                     textContentType={register ? 'newPassword' : 'password'}
//                 />
//                 {register &&
//                     <View style={styles.inputWrapper}>
//                         <Input
//                             autoCapitalize={'words'}
//                             maxLength={20}
//                             onChangeText={value => this.setState({ name: value })}
//                             placeholder='First Name'
//                             secureTextEntry={false}
//                             size={.35}
//                             value={name}
//                             returnKeyType='next'
//                             textContentType='givenName'
//                         />
//                         <Input
//                             autoCapitalize={'none'}
//                             maxLength={20}
//                             onChangeText={value => this.setState({ username: value })}
//                             placeholder='Username'
//                             secureTextEntry={false}
//                             size={.35}
//                             value={username}
//                             returnKeyType='done'
//                             textContentType='username'
//                         />
//                     </View>
//                 }
//                 <Button
//                     onPress={onPress}
//                     text={text}
//                 />
//                 <Text
//                     onPress={() => this.setState({ register: !register })}
//                     style={styles.optionText}
//                 >
//                     {`${option}`}
//                 </Text>
//             </KeyboardAwareScrollView>
//         )
//     }
// }

export default Login