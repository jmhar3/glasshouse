import { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import homeIcon from '../images/swatches.png'
import menuButton from '../images/list.png'
import MenuFirebase from '../components/firebase/menuFirebase';
import firebase from "firebase/app";
import "firebase/auth";


const Nav = () => {
    const [showing, setShowing] = useState(false)

    const mouseEnter = () => setShowing(true);
    const mouseLeave = () => setShowing(false);
    
    const user = firebase.auth().currentUser;

    return (
        <header onMouseOver={mouseEnter} onMouseLeave={mouseLeave} >
            <div id="menu-head">
                <Link to="/">
                    <img src={homeIcon} id="user-icon" alt="home icon" />
                </Link>
                <img src={menuButton} id="menu-button" alt="menu" style={{ display: (showing ? 'none' : 'block') }} />
                <div id="user-access" style={{ display: (showing ? 'block' : 'none') }}>
                    <MenuFirebase />
                </div>
            </div>
            <nav id="menu-body" style={{ display: (showing ? 'flex' : 'none') }}>
                <Link to="/">Explore Swatches</Link>
                {user !== null ? <Link to="/creations">Your Creations</Link> : null}
                <Link to="/palette">Make Your Own</Link>
            </nav>
        </header>
    )
}

export default Nav;