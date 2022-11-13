import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyCvb9dNBpu5nWNsDU_rtzW9HfB4yDidnwY",
  authDomain: "boardapp-7e4e1.firebaseapp.com",
  projectId: "boardapp-7e4e1",
  storageBucket: "boardapp-7e4e1.appspot.com",
  messagingSenderId: "330854553753",
  appId: "1:330854553753:web:5cc4b47646afa21b8f0008",
  measurementId: "G-MG9QJNTHM8",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
