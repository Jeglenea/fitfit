import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyB2pBq8B1uNnUBafGaukgOjGAo1fJI6bu8",
  authDomain: "fitfit-project.firebaseapp.com",
  databaseURL: "https://fitfit-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitfit-project",
  storageBucket: "fitfit-project.appspot.com",
  messagingSenderId: "563034144201",
  appId: "1:563034144201:web:7047dfa15688eda054fc18",
  measurementId: "G-SLFK2XH8NW"
};

const firebaseApp = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };
export default database;