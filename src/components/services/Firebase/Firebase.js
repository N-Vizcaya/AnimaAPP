import * as firebase from 'firebase/app' 
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBF8uRQBvA7Yvuq20Nxv1RVqQTt9LZ8MAo",
  authDomain: "anima--training.firebaseapp.com",
  projectId: "anima--training",
  storageBucket: "anima--training.appspot.com",
  messagingSenderId: "339485695950",
  appId: "1:339485695950:web:d7ba6a260459eaf65f959f"
};


const app = initializeApp(firebaseConfig);


export const getFirebase = () => {
  return app
}

export const db = getFirestore(app)




