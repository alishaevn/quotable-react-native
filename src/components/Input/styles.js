import { StyleSheet } from 'react-native'
import { width } from '../../utilities/dimensions'

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: width * .75,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  title: {
    color: '#FFFFFF',
  }
})

export default styles