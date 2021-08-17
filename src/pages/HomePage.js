import { Link } from 'react-router-dom'
import Swatches from '../components/swatches/Swatches'
import './swatches.css';

const HomePage = () => {
    return (
        <>
            <div id="homepage">
                <Link to='/palette' className="action-button">Make Your Own</Link>
                <span className="page-title">
                    <h1 className="title">Explore</h1>
                </span>
                <Swatches />
            </div>

            <footer id="footer">
                <p>Special thanks to <a href="http://colormind.io/">ColorMind</a> + <a href="https://www.freepik.com" title="Freepik">Freepik</a>.</p>
            </footer>
        </>
    )
}

export default HomePage