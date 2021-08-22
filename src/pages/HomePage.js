import { Link } from 'react-router-dom'
import Swatches from '../components/swatches/Swatches'
import './swatches.css';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../components/firebase/config'
import { useEffect, useState } from 'react';

const HomePage = () => {

    const [swatchData, setSwatchData] = useState([])

    const db = firebase.firestore();

    const fetchSwatches = () => {
        db.collection("swatches").get().then((querySnapshot) => {
            for (var i in querySnapshot.docs) {
                const doc = querySnapshot.docs[i]
                console.log(i)
                setSwatchData(prevData => [...prevData, doc.data()])
            }
        });
    }

    useEffect(fetchSwatches, [])

    return (
        <>
            <div id="homepage">
                <Link to='/palette' className="action-button">Make Your Own</Link>
                <span className="page-title">
                    <h1 className="title">Explore</h1>
                </span>
                <Swatches swatchData={swatchData} />
            </div>

            <footer id="footer">
                <p>Special thanks to <a href="http://colormind.io/">ColorMind</a> + <a href="https://www.freepik.com" title="Freepik">Freepik</a>.</p>
            </footer>
        </>
    )
}

export default HomePage