import firebase from "@firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDV1fP4N9R3lTaGKdr-33T76HJTijcew80",
  authDomain: "skate-shop-react.firebaseapp.com",
  projectId: "skate-shop-react",
  storageBucket: "skate-shop-react.appspot.com",
  messagingSenderId: "695576283399",
  appId: "1:695576283399:web:f9dc841fd55a97d7611da2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
