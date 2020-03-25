import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/colors'
import { width } from '../../utilities/dimensions'

const styles = StyleSheet.create({
  button: {
    color: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
    width: width * .75,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    color: colors.white
  },
})

export default styles