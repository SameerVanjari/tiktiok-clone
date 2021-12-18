import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import {initializeApp} from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeoAWXHmztEMdxKg9B64525wThNVB4s-g",
    authDomain: "tiktok-clone-9b0e0.firebaseapp.com",
    projectId: "tiktok-clone-9b0e0",
    storageBucket: "tiktok-clone-9b0e0.appspot.com",
    messagingSenderId: "284701340265",
    appId: "1:284701340265:web:994360c25aa2e6d95ba8f8",
    measurementId: "G-MEDEJ7RH59"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore();

export default db;