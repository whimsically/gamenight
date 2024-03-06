import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate();

    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join_room', { username, room });
          navigate('/chats', { replace: true });
        }
    };

  return (
    <div>
      <div>
        <h1>{`Chat`}</h1>
        <input
          className="input"
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className="select"
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>
        
        <button className="button" onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Chat;
