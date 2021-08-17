import { Link } from 'react-router-dom'
import Swatches from '../components/swatches/Swatches'
import './swatches.css';

const CreationsPage = () => {
    return (
        <>
            <div id="creations-page">
                <div className="page-title">
                    <h1 className="title">Creations</h1>
                </div>
                <Swatches />
            </div>
            <footer id="footer">
                <p>Special thanks to <a href="http://colormind.io/">ColorMind</a> + <a href="https://www.freepik.com" title="Freepik">Freepik</a>.</p>
            </footer>
        </>
    )
}

export default CreationsPage