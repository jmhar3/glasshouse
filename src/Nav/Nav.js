import { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
    render() {
        return (
            <header>
            <div id="menu-head">
                <img src="./images/NG.jpeg" id="user-icon" />
                <img src="./images/list.png" id="menu-button" />
                <div id="user-access" className="hidden">
                    <h5 className="user">user name</h5>
                    <Link to="/accountaccess">Sign Up Now</Link>
                </div>
            </div>
            <nav className="navbar hidden">
                <Link to="/">Explore Swatches</Link>
                <Link to="/creations">Your Creations</Link>
                <Link to="/palette">Make Your Own</Link>
            </nav>
        </header>
        )
    }
}