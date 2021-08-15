import { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import userIcon from '../images/NG.jpeg'
import menuButton from '../images/list.png'

export default class Nav extends Component {
    state = {
        showing: false
    };

    // componentDidMount() {
    //     document.addEventListener('click', () => this.setState({ showing: !showing}));
    // }
    
    // componentWillUnmount() {
    //     const {showing} = this.state
    //     document.removeEventListener('click', () => this.setState({ showing: !showing}));
    // }

    render() {
        const {showing} = this.state
        return (
            <header>
            <div id="menu-head">
                <img src={userIcon} id="user-icon" />
                <img src={menuButton} id="menu-button" onClick={() => this.setState({ showing: !showing})} />
                <div id="user-access" style={{ display: (showing ? 'block' : 'none') }}>
                    <h5 className="user">user name</h5>
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