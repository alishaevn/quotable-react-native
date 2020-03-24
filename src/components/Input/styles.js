import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/colors'
import { width } from '../../utilities/dimensions'

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.white,
  }
})

export default styles