import { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import userIcon from '../images/NG.jpeg'
import menuButton from '../images/list.png'

export default class Nav extends Component {
    state = {
        showing: false
    };

    render() {
        const {showing} = this.state
        return (
            <header onMouseEnter={() => this.setState({ showing: !showing})} onMouseLeave={() => this.setState({ showing: !showing})}>
            <div id="menu-head">
                <img src={userIcon} id="user-icon" alt="user icon" />
                <img src={menuButton} id="menu-button" alt="menu" style={{ display: (showing ? 'none' : 'block') }} />
                <div id="user-access" style={{ display: (showing ? 'block' : 'none') }}>
                    <h5 className="user">You are not logged in.</h5>
                    <Link to="/accountaccess">Sign Up Now</Link>
                </div>
            </div>
            <nav id="navbar" style={{ display: (showing ? 'flex' : 'none') }}>
                <Link to="/">Explore Swatches</Link>
                <Link to="/creations">Your Creations</Link>
                <Link to="/palette">Make Your Own</Link>
            </nav>
        </header>
        )
    }
}