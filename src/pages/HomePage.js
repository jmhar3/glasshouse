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
        </div>
    )
}

export default HomePage