import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

function Home() {
    return (
    <>
      <h1>Welcome to Game Night!</h1>
      <div>
          {Auth.loggedIn() ? (
              <button onClick={logout}>
                Logout
              </button>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </>
  );
}

export default Home;
