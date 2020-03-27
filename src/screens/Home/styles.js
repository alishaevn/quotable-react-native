import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    heart: {
        color: '#042A2B'
    },
    homeAuthor: {
        fontSize: 18,
        color: 'gray',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 50
    },
    homeQuote: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        color: '#042A2B'
    },
})

export default styles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/