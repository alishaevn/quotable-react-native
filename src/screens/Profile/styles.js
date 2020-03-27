import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    profile: {
        flex: 1,
        backgroundColor: '#5EB1BF'
    },
    profileAuthor: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 16,
        color: '#5EB1BF',
        marginTop: 20
    },
    profileQuote: {
        textAlign: 'center',
        fontSize: 18,
        color: '#042A2B'
    },
    quoteBlock: {
        width: 300,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        margin: 10,
        height: 200,
        paddingHorizontal: 20,
    },
    quotesBox: {
        flex: 2,
        paddingLeft: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 350,
        marginTop: 25,
        backgroundColor: '#5EB1BF',
        paddingTop: 10
    },
    signOut: {
        marginBottom: 15
    }
})

export default styles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/