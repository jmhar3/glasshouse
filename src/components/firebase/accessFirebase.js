import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { FirebaseAuth } from "react-firebaseui";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyCJf0VUOlF1V_B9Dmwl3WYbd0zrWqJ2Vdc",
    authDomain: "glasshouse-jmar.firebaseapp.com",
    databaseURL: "https://glasshouse-jmar.firebaseio.com",
    projectId: "glasshouse-jmar",
    storageBucket: "glasshouse-jmar.appspot.com",
    messagingSenderId: "891273660406",
    appId: "1:891273660406:web:6fd086f5afbf0290d5e9d7",
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
            // signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        }
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};

function SignInScreen() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
    }, []);

    if (!isSignedIn) {
        return (
            <div className="access-modal">
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
    return (
        <div id="logged-in">
            <div id="logged-in-header">
                <h1>Welcome {firebase.auth().currentUser.displayName}!</h1>
                <h4>You are signed in.</h4>
            </div>
            <Link to='/palette' id="logged-in-button">Start Creating</Link>
        </div>
    );
}

export default SignInScreen;