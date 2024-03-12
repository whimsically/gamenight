import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import Chatbox from '../components/ChatBox'

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
    const { loading, data } = useQuery(QUERY_USER, {
      variables: {
        username: user
      }
    });

  const [chatIdState, setChatIdState] = useState('');

  useEffect(() => {
    if (data && data.getUserGroups && data.getUserGroups.groups && data.getUserGroups.groups.length > 0) {
      const groupChatId = data.getUserGroups.groups[0]._id.toString();
      console.log(groupChatId);
      setChatIdState(groupChatId);
    } else {
      
      console.log('Data is not ready or no groups available');
    }
  }, [data]);

    return (
      <>
      <h1>Chats</h1>
      <div className='chat'>
      {!loading && <Chatbox chatId={chatIdState} user={user}/>}
      </div>
      </>
    )
  }
};