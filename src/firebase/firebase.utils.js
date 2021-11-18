import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDUtUr2j4zKQZe38Cn0ynWr4O0n71zf90Y",
    authDomain: "crwn-db-a3302.firebaseapp.com",
    projectId: "crwn-db-a3302",
    storageBucket: "crwn-db-a3302.appspot.com",
    messagingSenderId: "833948824733",
    appId: "1:833948824733:web:d8cd8edd09a4ea496a5074"
  };



  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase

