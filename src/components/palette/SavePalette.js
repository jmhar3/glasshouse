import saveIcon from '../../images/save.png';
import { useState, useContext, useEffect } from 'react';
import { PanelContext } from './PanelContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/auth";

const SavePalette = () => {
    const [save, setSave] = useState(true)
    const showSave = e => {
        setSave(false)
    }
    const hideSave = e => {
        setSave(true)
    }

    const [inputValue, setInputValue] = useState("no name creation")
    const setValue = e => {
        setInputValue(e.target.value)
    }

    const history = useHistory()
    const [panelState, dispatch] = useContext(PanelContext);
    
    const savePalette = e => {
        dispatch({
            type: "savePalette",
            data: inputValue
        })
        history.push('/creations')
    }

    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver();
    }, []);

    if (isSignedIn) {
        return (
            <>
                <input type="text" placeholder="Name Your Creation" id="name-swatch" onKeyUp={setValue} required />
                <div className="palette-menu-item" onMouseEnter={showSave} onMouseLeave={hideSave} onClick={savePalette}>
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