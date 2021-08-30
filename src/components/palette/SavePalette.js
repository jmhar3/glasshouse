import saveIcon from '../../images/save.png';
import { useState, useContext } from 'react';
import { PanelContext } from './PanelContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/auth";

const SavePalette = () => {
    const [save, setSave] = useState(true)
    const showSave = e => setSave(false);
    const hideSave = e => setSave(true);

    const [inputValue, setInputValue] = useState("no name creation")
    const setValue = e => {
        setInputValue(e.target.value)
    }

    const history = useHistory()
    const [panelState, dispatch] = useContext(PanelContext);

    var db = firebase.firestore();
    const user = firebase.auth().currentUser;

    const savePalette = () => {
        if (user !== null) {
            db.collection("swatches").add({
                name: inputValue,
                colours: panelState,
                creator: user.uid
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    history.push('/creations')
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                    alert("An error occurred while saving creation.")
                });
        }
    }

    if (user !== null) {
        return (
            <>
                <input type="text" placeholder="Name Your Creation" id="name-swatch" onKeyUp={setValue} required />
                <div className="palette-menu-item" onMouseOver={showSave} onMouseLeave={hideSave} onClick={savePalette}>
                    {save ? <img src={saveIcon} alt="save" /> : <h4>Share</h4>}
                </div>
            </>
        )
    } return (
        <>
            <Link to='/accountaccess' className="palette-menu-item">
                Sign In
            </Link>
        </>
    )
}

export default SavePalette;