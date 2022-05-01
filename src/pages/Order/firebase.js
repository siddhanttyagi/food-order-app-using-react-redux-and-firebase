import firebase from 'firebase/compat'
import 'firebase/firestore'

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyB8ygpNVgasAdKkPordZKKBQw7EAK-jk-s",
  authDomain: "react-food-order-32703.firebaseapp.com",
  databaseURL: "https://react-food-order-32703-default-rtdb.firebaseio.com",
   projectId: "react-food-order-32703",
     storageBucket: "react-food-order-32703.appspot.com",
     messagingSenderId: "982602551702",
    appId: "1:982602551702:web:7217bf375b4d0b50c50db7"
});

var db = firebaseApp.firestore();

export { db };
