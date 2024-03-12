import { useQuery } from '@apollo/client';
import { QUERY_USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

function Profile() {
  if (!Auth.loggedIn()){
    return (
      <>Please log in to view!</>
    )
  } else {
    const user = Auth.getProfile().data.username;
    const { loading, data: userData } = useQuery(QUERY_USER_PROFILE, {
      variables: {
        username: user
      }
    });
    if (!loading) {
      return(
        <>
        <h1>Profile</h1>
        <br />
        <h3>Username: {user}</h3>
        </>
      )
    }
  }

}

export default Profile;
