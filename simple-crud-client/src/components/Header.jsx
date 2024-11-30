import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to='/sign-up'>Sign Up</Link>
            </ul>
        </div>
    );
};

export default Header;