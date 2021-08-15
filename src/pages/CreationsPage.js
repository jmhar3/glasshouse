import { Link } from 'react-router-dom'
import Swatches from '../components/Swatches'
import './swatches.css';

const CreationsPage = () => {
    return(
        <div id="homepage">
            <Link to='/palette' className="action-button">Make Another</Link>
            <div className="page-title">
                <h1 className="title">Creations</h1>
            </div>
            <Swatches />
            <footer id="footer">
                <p>Special thanks to <a href="http://colormind.io/">ColorMind</a> and <a href="https://www.freepik.com" title="Freepik">Freepik</a>.</p>
            </footer>
        </div>
    )
}

export default CreationsPage