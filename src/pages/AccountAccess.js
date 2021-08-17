import { Link } from 'react-router-dom';
import SignInScreen from '../components/firebase/firebase';

const CreationsPage = () => {
    return(
        <div id="homepage">
            <Link to='/palette' className="action-button">Make Another</Link>
            <h1>hi</h1>
            <SignInScreen />
        </div>
    )
}

export default CreationsPage