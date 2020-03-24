import React from 'react'
import { TextInput } from 'react-native'

import { colors } from '../../utilities/colors'
import stylesFn from './styles'

const Input = ({ autoCapitalize, keyboardType, maxLength, onChangeText, secureTextEntry, size, placeholder, value }) => {
    const styles = stylesFn(size)

    return (
        <TextInput
            style={styles.input}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            onChangeText={value => onChangeText(value)}
            value={value}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
        />
    )
}

export default Input