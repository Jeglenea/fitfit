// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2pBq8B1uNnUBafGaukgOjGAo1fJI6bu8",
  authDomain: "fitfit-project.firebaseapp.com",
  projectId: "fitfit-project",
  storageBucket: "fitfit-project.appspot.com",
  messagingSenderId: "563034144201",
  appId: "1:563034144201:web:7047dfa15688eda054fc18",
  measurementId: "G-SLFK2XH8NW"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { db, auth, database};