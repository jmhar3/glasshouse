import { useContext } from 'react';
import { PanelContext } from '../palette/PanelContext';
import { useHistory } from 'react-router';
import heartIcon from '../../images/heart.png';
import binIcon from '../../images/garbage.png';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../firebase/config'

const SwatchCard = ({ swatchName, swatchColours, swatchKey, mouseLeave }) => {

    const mouseEnter = () => {
        document.querySelector('body').style.background = `linear-gradient(to right, ${swatchColours.join(', ')})`
    }

    const history = useHistory()

    const [panelState, dispatch] = useContext(PanelContext);

    const handleClick = e => {
        dispatch({
            type: "openPalette",
            data: swatchColours
        })
        history.push('/palette')
    }

    const deleteSwatch = () => {
        const db = firebase.firestore()
        db.collection("swatches").doc(swatchKey).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div key={swatchKey} className="swatch-card" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="card-head">
                <h4 className="swatch-name" onClick={handleClick}>{swatchName}</h4>
                {/* LIKE/SAVE + DELETE FUNCTION COMING SOON */}
                {/* {window.location.href.includes("creations") ? <img className="delete-button" src={binIcon} onClick={deleteSwatch} /> : <img className="like-button" src={heartIcon} />} */}
            </div>
            <div className="swatch-colours">
                {swatchColours.map((colour, index) =>
                    <div key={index} className="colour-div" style={{ background: colour }} />
                )}
            </div>
        </div>
    )
}

export default SwatchCard;