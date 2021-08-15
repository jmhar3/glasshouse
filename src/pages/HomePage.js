import { Link } from 'react-router-dom'
import Swatches from '../components/Swatches'
import './swatches.css';

const HomePage = () => {
    return(
        <div id="homepage">
            <Link to='/palette' className="action-button">Make Your Own</Link>
            <Swatches />
        </div>
    )
}

export default HomePage