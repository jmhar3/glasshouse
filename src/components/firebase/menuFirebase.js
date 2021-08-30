import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Link } from "react-router-dom";

function MenuFirebase() {

    const user = firebase.auth().currentUser;

    if (user !== null) {
        return (
            <div>
                <h5 className="user">Hello {firebase.auth().currentUser.displayName}!</h5>
                <Link to="/" className="access" onClick={() => firebase.auth().signOut()}>Sign Out</Link>
            </div>
        );
    } 
    return (
        <div>
            <h5 className="user">Howdy Stranger</h5>
            <Link to="/accountaccess">Sign In</Link>
        </div>
    );
}

export default MenuFirebase;