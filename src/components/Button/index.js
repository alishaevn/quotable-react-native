import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import styles from './styles'

const Button = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <View>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button