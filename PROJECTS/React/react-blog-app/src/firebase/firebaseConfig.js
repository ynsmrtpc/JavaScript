import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAGKLoPxTVTN8PKVFZ3mBnAMGCceKI3Dp4',
  authDomain: 'reactblog-355e9.firebaseapp.com',
  databaseURL:
    'https://reactblog-355e9-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'reactblog-355e9',
  storageBucket: 'reactblog-355e9.appspot.com',
  messagingSenderId: '296486217189',
  appId: '1:296486217189:web:a920f53eb49a13c1753b0c',
}

const app = () => initializeApp(firebaseConfig)
app()
const db = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db as default, googleAuthProvider, firebase }
