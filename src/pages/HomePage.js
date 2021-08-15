import { Link } from 'react-router-dom'
import Swatches from '../components/Swatches'
import './homepage.css';

const HomePage = () => {
    return(
        <>
            <Link to='/palette' id="action-button">Make Your Own</Link>
            <Swatches />
        </>
    )
}

export default HomePage