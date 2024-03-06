// import './index.css';
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
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input className={styles.input} placeholder='Username...'
        onChange={(e) => setUsername(e.target.value)} />

        <select className={styles.input}
        onChange={(e) => setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>
        
        <button className={styles.button} onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Chat;
