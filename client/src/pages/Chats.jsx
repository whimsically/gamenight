import { useState, useEffect } from 'react';
import { useSubscription, useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGES } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

export default function Chats(){  
  if (!Auth.loggedIn()){
    return (
      <>
      <h1>Chats</h1>
      <h2>Please log in to view!</h2>
      </>
    )
  } else {

    const user = Auth.getProfile().data.username;
    const { loading, data } = useQuery(QUERY_ME, {
      variables: { username: user },
    });

    const groups = data?.groups || {};

    return (
      <>
      <h1>Chats</h1>
      <div className='chat'>
      {/* {Messages} */}
      </div>
      <label for='chat-message'>Message:</label>
      <input type='text' name='chat-message'></input>
      <input type='submit'></input>
      </>
    )
  }
};