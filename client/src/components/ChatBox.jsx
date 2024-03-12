import { useState, useEffect } from 'react';
import { useQuery, useMutation, useSubscription} from '@apollo/client';
import { GET_GROUP_CHAT } from '../utils/queries';
import { SEND_MESSAGE, GET_MESSAGES } from '../utils/mutations';

function Chatbox ({ chatId, user }) {
    const chatMessages = [];
    const [chatFormState, setChatFormState] = useState({ from: user, content: '' })
    const [sendMessage] = useMutation(SEND_MESSAGE)

    const { data, loading, error } = useQuery(GET_GROUP_CHAT, {
            variables: {
                groupId: chatId
        }});

    const { data: subData } = useSubscription(GET_MESSAGES, {
        variables: {
            toGroup: chatId
        }
    })
    
    const handleChange = (event) => {
            const { name, value } = event.target;
            setChatFormState({
              ...chatFormState,
              [name]: value,
            });
        console.log(chatFormState)
    };

    const handleChatSubmit =  async (event) => {
        event.preventDefault();
        try {
            const submitChat = await sendMessage({
                variables: {
                    from: chatFormState.from,
                    content: chatFormState.content,
                    toGroup: chatId
                }
            });
        console.log(submitChat)
        } catch (err) {
            console.log(err)
        }
    }

    if (!loading) {
        const groupName = data.getMessages.groupName;
        const groupChat = data.getMessages.groupChat;
        return (
        <>
        <h2>{groupName} </h2>
        <div className='chatbox' id='chatbox'>
        {groupChat.map((message) => (
            <div className='chatMessage' key={message._id}>{message.from}: {message.content}</div>
        ))}
        
        </div>
        <br />
        <form onSubmit={handleChatSubmit}>
            <label for='content'>Message:</label>
            <input type='text' name='content' onChange={handleChange}></input>
            <button type='submit'>send message</button>
        </form>
        </>
      )
    };
};


export default Chatbox;