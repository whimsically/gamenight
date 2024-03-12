import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

function Home() {
  const user = Auth.getProfile().data.username;
  const { loading, data: userData } = useQuery(QUERY_USER_PROFILE, {
    variables: {
      username: user
    }});

    return (
    <>
      <h1>Welcome to Game Night!</h1>
      <div>
          {Auth.loggedIn() ? (
            <>
              <button onClick={logout}>
                Logout
              </button>
          <div>Hello, {user}!</div>
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
