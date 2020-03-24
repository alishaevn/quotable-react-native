import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/colors'
import { width } from '../../utilities/dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.forestGreen,
  },
  inputField: {
    height: 40,
    width: width * .75,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: colors.white
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * .75,
  },
  logo: {
    resizeMode: 'center',
    height: 300,
  },
  optionText: {
    color: colors.white,
    marginTop: 20,
  },
})

export default styles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/