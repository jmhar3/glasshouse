import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJf0VUOlF1V_B9Dmwl3WYbd0zrWqJ2Vdc",
    authDomain: "glasshouse-jmar.firebaseapp.com",
    databaseURL: "https://glasshouse-jmar-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "glasshouse-jmar",
    storageBucket: "glasshouse-jmar.appspot.com",
    messagingSenderId: "891273660406",
    appId: "1:891273660406:web:6fd086f5afbf0290d5e9d7",
    measurementId: "G-SEVN8GFFP7"
};

firebase.initializeApp(firebaseConfig);