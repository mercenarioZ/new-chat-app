// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { GoogleAuthProvider, connectAuthEmulator, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyClQNf6_x1keVsH3GAKrmFatoHStYbOosA',
    authDomain: 'chatapplication-21d0b.firebaseapp.com',
    projectId: 'chatapplication-21d0b',
    storageBucket: 'chatapplication-21d0b.appspot.com',
    messagingSenderId: '475734235714',
    appId: '1:475734235714:web:b251edd8facd890dedebdb',
    measurementId: 'G-83RGQT3P9N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
    experimentalForceLongPolling: true, // this line
    useFetchStreams: false, // and this line
  })

const auth = getAuth(app)
const db = getFirestore(app)

connectAuthEmulator(auth, 'http://localhost:9099')

if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080)
}

const provider = new GoogleAuthProvider()

export { auth, db, provider }
