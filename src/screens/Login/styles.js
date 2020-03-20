import { StyleSheet } from 'react-native'
import { width } from '../../utilities/dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#042A2B',
  },
  inputField: {
    height: 40,
    width: width * .75,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  logo: {
    resizeMode: 'center',
  },
  optionText: {
    color: '#FFFFFF'
  },
})

export default styles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/