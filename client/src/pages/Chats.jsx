import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, GET_GROUP_CHAT } from '../utils/queries';
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
      if (data) {
        const groupChatId = data.getUserGroups.groups[0]._id.toString();
        console.log(groupChatId);
        setChatIdState(groupChatId);
      }
    }, [loading]);

    return (
      <>
      <h1>Chats</h1>
      <div className='chat'>
      {!loading && <Chatbox chatId={chatIdState}/>}
      </div>
      </>
    )
  }
};