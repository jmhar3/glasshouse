import { Link } from 'react-router-dom'
import Swatches from '../components/swatches/Swatches'
import './swatches.css';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../components/firebase/config'
import { useEffect, useState, useContext } from 'react';
import { PanelContext } from '../components/palette/PanelContext';
import randomColor from 'randomcolor';

const HomePage = () => {

    const [swatchData, setSwatchData] = useState([])

    const db = firebase.firestore();

    const fetchSwatches = () => {
        db.collection("swatches").get().then((querySnapshot) => {
            for (var i in querySnapshot.docs) {
                const doc = querySnapshot.docs[i]
                setSwatchData(prevData => [...prevData, doc.data()])
            }
        });
    }

    useEffect(fetchSwatches, [])

    const [panelState, dispatch] = useContext(PanelContext);

    const panelTotal = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
    
    const fetchColours = () => {
        for (let i = 0; i < panelTotal; i++) {
            dispatch({
                type: "addPanel",
                data: randomColor()
            })
        }
    }

    // const fetchColours = () => {
    //     fetch('http://colormind.io/api/', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             model: "default"
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data =>
    //             data.result.forEach((colour, i) => dispatch({
    //                 type: "addPanel",
    //                 data: `RGB(${colour.join(", ")})`
    //             }))
    //         )
    // }

    useEffect(fetchColours, [])

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