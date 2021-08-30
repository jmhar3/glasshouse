import Swatches from '../components/swatches/Swatches'
import './swatches.css';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../components/firebase/config'
import { useEffect, useState } from 'react';

const CreationsPage = () => {

    const [swatchData, setSwatchData] = useState([])

    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    const fetchSwatches = () => {
        if (user !== null) {
            db.collection("swatches").where("creator", "==", user.uid)
                .get()
                .then((querySnapshot) => {
                    for (var i in querySnapshot.docs) {
                        const doc = querySnapshot.docs[i]
                        setSwatchData(prevData => [...prevData,{id: doc.id, ...doc.data()}])
                    }
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        } else {
            console.log('No user is signed in.');
        }
    }

    useEffect(fetchSwatches, [])

    const removeSwatch = swatchID => {
        const newSwatch = swatchData.filter(data => data.id !== swatchID);
        setSwatchData(newSwatch)
    }

    return (
        <>
            <div id="creations-page">
                <div className="page-title">
                    <h1 className="title">Creations</h1>
                </div>
                <Swatches swatchData={swatchData} removeSwatch={removeSwatch} />
            </div>
            <footer id="footer">
                <p>Special thanks to <a href="http://colormind.io/">ColorMind</a> + <a href="https://www.freepik.com" title="Freepik">Freepik</a>.</p>
            </footer>
        </>
    )
}

export default CreationsPage