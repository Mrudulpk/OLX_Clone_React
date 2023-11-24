import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA5Q_VJbCm_qDml5UUFlDctzy0PMdAWLkw",
    authDomain: "olx-clone-4daaa.firebaseapp.com",
    projectId: "olx-clone-4daaa",
    storageBucket: "olx-clone-4daaa.appspot.com",
    messagingSenderId: "402577489126",
    appId: "1:402577489126:web:1df2d7354dedb143740f27",
    measurementId: "G-QYC2RWR8DG"
  };

export default firebase.initializeApp(firebaseConfig)