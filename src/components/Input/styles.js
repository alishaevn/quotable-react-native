import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/colors'
import { width } from '../../utilities/dimensions'

const stylesFn = size => StyleSheet.create({
  input: {
    height: 40,
    width: width * size,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: colors.white,
    paddingLeft: 10,
  },
  title: {
    color: colors.white,
  }
})

export default stylesFn