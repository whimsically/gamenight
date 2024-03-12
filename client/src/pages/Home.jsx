import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (Auth.loggedIn()) {
      const profile = Auth.getProfile();
      setUser(profile?.data?.username);
    }
  }, []);

  const { loading, data: userData } = useQuery(QUERY_USER_PROFILE, {
    variables: { username: user },
    skip: !user,
  });

    return (
    <>
      <h1>Welcome to Game Night!</h1>
      <div>
          {Auth.loggedIn() ? (
            <>
          <div>Hello, {user}!</div>
          <button onClick={logout}>
                Logout
              </button>
          <button>Create New Group</button>
          </>
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
