import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      userQuotes: []
    }
  }

  componentDidMount() {
    // RETRIEVE USER'S QUOTES
    // firebaseDb.on('value', snap => {
    //   const uid = firebase.auth().currentUser.uid

    //   let usersProp =  snap.val().users // entire users object
    //   let objectToArray = Object.values(usersProp) // array of user objects
    //   let userQuotes = objectToArray.filter(obj => obj.uid === uid) // array of objects that the user added

    //   this.setState({
    //     userQuotes
    //   })
    // })
  }

    // onLogout = () => {
    //     const { updateState } = this.props

    //     AsyncStorage.removeItem('user')
    //     AsyncStorage.removeItem('token')
    //     updateState(false)
    // }

  render() {
    // const user = firebase.auth().currentUser
    // let name, photoUrl /* email */

    // if (user !== null) {
    //   name = user.displayName ? user.displayName : ''
    //   photoUrl = user.photoURL ? user.photoURL : ''
    //   // email = user.email
    // }

    // // LIST EACH QUOTE INSIDE OF A VIEW
    // let printToScreen = this.state.userQuotes.map((obj, index) => (
    //     <View style={styles.quoteBlock} key={index} >
    //       <Text style={styles.profileQuote}>{ obj.quote }</Text>
    //       <Text style={styles.profileAuthor}>{ obj.author }</Text>
    //   </View>
    //   ))

    return (
      <View style={styles.profile}>
        <View style={styles.header}>
          <Text
            // onPress={() => firebase.auth().signOut()}
            style={styles.signOut}
          >
            Sign Out
          </Text>
          {/* <Text>{ name }</Text> */}
          {/* <Text>Email: { email}</Text> */}
          {/* <Text>{ photoUrl }</Text> */}
        </View>

        {/* <View style={styles.quotesBox}>
          <ScrollView>
            { printToScreen }
          </ScrollView>
        </View> */}
      </View>
    );
  }
}

export default Profile