import firebase from "firebase/app";
import'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCJqrNwLMhT6l_P_yZbElfMD6zhTasfqP8",
    authDomain: "sistema-7f4f9.firebaseapp.com",
    projectId: "sistema-7f4f9",
    storageBucket: "sistema-7f4f9.appspot.com",
    messagingSenderId: "264525958612",
    appId: "1:264525958612:web:ba433eb58c52e9e2f15a41",
    measurementId: "G-K7LJ984JMP"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;

 