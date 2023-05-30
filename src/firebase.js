// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB2pBq8B1uNnUBafGaukgOjGAo1fJI6bu8",
  authDomain: "fitfit-project.firebaseapp.com",
  projectId: "fitfit-project",
  storageBucket: "fitfit-project.appspot.com",
  messagingSenderId: "563034144201",
  appId: "1:563034144201:web:7047dfa15688eda054fc18",
  measurementId: "G-SLFK2XH8NW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };