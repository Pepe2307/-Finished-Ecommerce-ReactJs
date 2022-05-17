import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqT1HOtfnbkQxzPZ6-5H6DrBrphTDIPI4",
  authDomain: "react-proyect-a9afb.firebaseapp.com",
  projectId: "react-proyect-a9afb",
  storageBucket: "react-proyect-a9afb.appspot.com",
  messagingSenderId: "612465866305",
  appId: "1:612465866305:web:a891b918e58b96ff8538c0"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)