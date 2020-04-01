import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
// import DoubleClick from 'react-native-double-click'

import styles from './styles'

const Home = () => {
  return (
    <View style={{ alignSelf: 'center', marginTop: 100 }}>
      <TouchableOpacity onPress={this.onLogout} >
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

// class Home extends Component {
//   constructor() {
//     super()
//     this.state = {
//       quote: '',
//       author: '',
//       clicked: false
//     }
//   }

//   componentDidMount() {

//     const todayString = () => {
//       let today = new Date();
//       let dd = today.getDate();
//       let mm = today.getMonth() + 1;

//       if (dd < 10) {
//         dd = '0' + dd;
//       }

//       if (mm < 10) {
//         mm = '0' + mm;
//       }
//       return `${mm}/${dd}`;
//     };

//     const today = todayString()

//     // firebaseDb.on('value', snap => { // snap.val() will show me my current database
//     //   // FIND THE QUOTE OF THE DAY
//     //   const qotd =  snap.val().qotd.find(obj => obj.date === today)

//     //   this.setState({
//     //     quote: qotd.quote,
//     //     author: qotd.author
//     //   })

//     //   // CHECK TO SEE IF THE USER HAS LIKED THIS QUOTE
//     //   // const uid = firebase.auth().currentUser.uid
//     //   let usersProp =  snap.val().users // entire users object
//     //   let objectToArray = Object.values(usersProp) // array of user objects
//     //   let userQuotes = objectToArray.filter(obj => obj.uid === uid) // array of objects that the user added
//     //   let found = userQuotes.find(obj => obj.quote === this.state.quote) // will be empty if the user hasn't liked the quote
//     //   if (found) {
//     //     this.setState({
//     //       clicked: true
//     //     })
//     //   }

//     // })
//   }

//   // SAVE THE QUOTE TO THE DB WITH THE USER'S ID
//   saveQuote = () => {
//     // const uid = firebase.auth().currentUser.uid

//     // firebaseDb.child('users').push({
//     //     quote: this.state.quote,
//     //     author: this.state.author,
//     //     uid
//     //   })

//     this.setState({
//       clicked: true
//     })

//   }

  // onLogout = () => {
  //   const { updateState } = this.props

  //   AsyncStorage.removeItem('user')
  //   AsyncStorage.removeItem('token')
  //   updateState(false)
  // }

  // render() {
  //   console.log('HOME PROPS:', this.props)

//     let iconName = this.state.clicked ? 'ios-heart' : 'ios-heart-outline'
//     let tintColor = this.state.clicked ? '#5EB1BF' : ''

    // return (
    //   <View style={styles.container} >
    //     {/* <DoubleClick onClick={() => this.saveQuote()} >
    //       <Text style={styles.homeQuote}>{ this.state.quote }</Text>
    //       <Text style={styles.homeAuthor}>{ this.state.author }</Text>
    //     </DoubleClick> */}
    //     <Ionicons name={iconName} size={25} color={tintColor}/>
    //   </View>
    // );
