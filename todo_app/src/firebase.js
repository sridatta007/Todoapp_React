import firebase from "firebase/compat/app"
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDiSZH-9kVsq2BIsROJmbfq_5ES_mWXE2g",
    authDomain: "todo-app-cp-7bfbf.firebaseapp.com",
    projectId: "todo-app-cp-7bfbf",
    storageBucket: "todo-app-cp-7bfbf.appspot.com",
    messagingSenderId: "806624918950",
    appId: "1:806624918950:web:213ac222d4888e86bce367",
    measurementId: "G-MB7K6V341G"
});

const db = firebaseApp.firestore();


export default db;