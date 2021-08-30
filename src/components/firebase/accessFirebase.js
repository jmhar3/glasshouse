import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { FirebaseAuth } from "react-firebaseui";
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

    const user = firebase.auth().currentUser;

    if (user !== null) {
        return (
            <div id="logged-in">
                <div id="logged-in-header">
                    <h1>Welcome {user.displayName}!</h1>
                    <h4>You are signed in.</h4>
                </div>
                <Link to='/palette' id="logged-in-button">Start Creating</Link>
            </div>
        );
    }
    return (
        <div className="access-modal">
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default SignInScreen;