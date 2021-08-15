import { Link } from 'react-router-dom'
import Swatches from '../components/Swatches'
import './swatches.css';

const HomePage = () => {
    return(
        <div id="homepage">
            <Link to='/palette' className="action-button">Make Your Own</Link>
            <span className="page-title">
                <h1 className="title">Swatches</h1>
            </span>
            <Swatches />
            <footer id="footer">
                <p>Special thanks to <a href="http://colormind.io/">ColorMind</a> + <a href="https://www.freepik.com" title="Freepik">Freepik</a> + <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>.</p>
            </footer>
        </div>
    )
}

export default HomePage