import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyCfChhw2XIrdEdJlFtF_daCrPx5zwZn2cw",
  authDomain: "fir-cfe5c.firebaseapp.com",
  projectId: "fir-cfe5c",
  storageBucket: "fir-cfe5c.appspot.com",
  messagingSenderId: "930225075630",
  appId: "1:930225075630:web:7146fdd76701252a89843f",
  measurementId: "G-Q74M7DMRVT"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase