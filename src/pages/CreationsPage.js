import { Link } from 'react-router-dom'
import Swatches from '../components/Swatches'
import './swatches.css';

const CreationsPage = () => {
    return(
        <div id="homepage">
            <Link to='/palette' className="action-button">Make Another</Link>
            <Swatches />
        </div>
    )
}

export default CreationsPage