// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBKX7kKzj1yU5cPryKEryr69KYbXSgw3c",
  authDomain: "firegram-71020.firebaseapp.com",
  projectId: "firegram-71020",
  storageBucket: "firegram-71020.appspot.com",
  messagingSenderId: "730672016792",
  appId: "1:730672016792:web:53b2708d4972059f0c4fed",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
