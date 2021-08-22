import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { FirebaseAuth } from "react-firebaseui";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
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