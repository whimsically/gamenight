import { useState, useEffect } from 'react';
import { useSubscription, useQuery, useMutation } from '@apollo/client';
import { GET_GROUP_CHAT } from '../utils/queries';
import { GET_MESSAGES, POST_MESSAGE } from '../utils/mutations';

function Chatbox ({ chatId }) {
    const [postMessage] = useMutation(POST_MESSAGE)
    const { data, loading, error } = useQuery(GET_GROUP_CHAT, {
            variables: {
                groupId: chatId
        }});

        if (!loading) {
            const groupName = data.getMessages.groupName;
            const groupChat = data.getMessages.groupChat;
            console.log(groupChat);
            return (
            <>
            <h2>{groupName} </h2>
            <ul className='chatbox'>
            {groupChat.map((message) => (
                <li key={message._id}>{message.from}: {message.content}</li>
            ))}
            </ul>
            <br />
            <label for='chat-message'>Message:</label>
            <input type='text' name='chat-message'></input>
            <input type='submit'></input>
            </>
          )
        };
    }

export default Chatbox;