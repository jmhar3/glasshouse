import ui from '../components/firebase/firebase';

const AccountAccess = () => {
    return (
        <div>
            <ui />
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
    )
}

export default AccountAccess;