import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBl5L3QI0pNtIlkoc3wklAQGpUz0UtyR8Q",
  authDomain: "react-webshop-f1b49.firebaseapp.com",
  databaseURL: "https://react-webshop-f1b49.firebaseio.com",
  projectId: "react-webshop-f1b49",
  storageBucket: "react-webshop-f1b49.appspot.com",
  messagingSenderId: "690202841075",
  appId: "1:690202841075:web:ad2cdd55da153495d70c86",
  measurementId: "G-10GH6H046M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;