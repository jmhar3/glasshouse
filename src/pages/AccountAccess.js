import { Link } from 'react-router-dom';
import SignInScreen from '../components/firebase/accessFirebase';
import './account-access.global.css';

const AccountAccess = () => {
    return(
        <div id="account-access">
            <SignInScreen />
        </div>
    )
}

export default AccountAccess