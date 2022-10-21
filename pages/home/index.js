import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../../firebase/config'
import Signup from '../signup';

class Home extends React.Component {
    render() {
        return <div>Welcome to Mutelu</div>
    }
}
export default Home;
