import * as firebase from 'firebase/app' 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCHweimeD4z1vd-z4CHR4s4V1Vw-1lPE3s",
  authDomain: "anima-training.firebaseapp.com",
  projectId: "anima-training",
  storageBucket: "anima-training.appspot.com",
  messagingSenderId: "983187939298",
  appId: "1:983187939298:web:8a3db21191d31c8f3ce3bb",
  measurementId: "G-8WH7582PHT"
};


const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const getFirebase = () => {
  return app
}

export const db = getFirestore(app)




