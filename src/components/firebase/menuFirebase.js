import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function MenuFirebase() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
    }, []);

    if (!isSignedIn) {
        return (
            <div>
                <h5 className="user">Howdy Stranger</h5>
                <Link to="/accountaccess">Sign In</Link>
            </div>
        );
    }
    return (
        <div>
            <h5 className="user">Hello {firebase.auth().currentUser.displayName}!</h5>
            <a className="access" onClick={() => firebase.auth().signOut()}>Sign Out</a>
        </div>
    );
}

export default MenuFirebase;