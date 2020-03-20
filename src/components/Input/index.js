import React from 'react'
import {
    Text,
    TextInput,
    View,
} from 'react-native'

import styles from './styles'

const Input = ({ autoCapitalize, maxLength, onChangeText, secureTextEntry, title, value }) => {
    return (
        <View>
            <Text style={styles.title}>
                {`${title}`}
            </Text>
            <TextInput
                style={styles.input}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                onChangeText={value => onChangeText(value)}
                value={value}
            />
        </View>
    )
}

export default Input