import { useContext } from 'react';
import { PanelContext } from '../palette/PanelContext';
import { useHistory } from 'react-router';
import heartIcon from '../../images/heart.png';
import binIcon from '../../images/garbage.png';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../firebase/config'

const SwatchCard = ({ swatch, removeSwatch, mouseLeave }) => {

    const mouseEnter = () => {
        document.querySelector('body').style.background = `linear-gradient(to right, ${swatch.colours.join(', ')})`
    }

    const history = useHistory()

    const [panelState, dispatch] = useContext(PanelContext);

    const handleClick = e => {
        dispatch({
            type: "openPalette",
            data: swatch.colours
        })
        history.push('/palette')
    }

    const deleteSwatch = () => {
        const db = firebase.firestore()
        firebase.auth().onAuthStateChanged((user) => {
            if (user.uid === swatch.creator) {
                db.collection("swatches").doc(swatch.id).delete().then(() => {
                    removeSwatch(swatch.id)
                    console.log("Document successfully deleted!", swatch.id);
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
        })
    }

    return (
        <div key={swatch.id} className="swatch-card" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="card-head">
                <h4 className="swatch-name" onClick={handleClick}>{swatch.name}</h4>
                {/* LIKE/SAVE + DELETE FUNCTION COMING SOON */}
                {window.location.href.includes("creations") ? <img className="delete-button" src={binIcon} onClick={deleteSwatch} /> : <img className="like-button" src={heartIcon} />}
            </div>
            <div className="swatch-colours">
                {swatch.colours.map((colour, index) =>
                    <div key={index} className="colour-div" style={{ background: colour }} />
                )}
            </div>
        </div>
    )
}

export default SwatchCard;