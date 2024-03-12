//add button to create group
//render pending invites and be able to accept
//profile pic if time

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

function Settings() {
  if (!Auth.loggedIn()){
    return (
      <>Please log in to view!</>
    )
  } else {
    // const [settingFormState, setSettingFormState] = useState();
    const user = Auth.getProfile().data.username;
    const { loading, data: userData } = useQuery(QUERY_USER_PROFILE, {
      variables: {
        username: user
      }
    });
    

    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   setSettingFormState({
    //     ...settingFormState,
    //     [name]: value,
    //   });
    // };



    if (!loading) {
      console.log(userData)
      return(
        <>
        <h1>Settings</h1>
        <br />
        {/* <button onClick={() => {}}>Create New Group</button> */}
        </>
      )
    }
  }
}
export default Settings;
