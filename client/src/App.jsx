import { useState } from 'react';
import io from 'socket.io-client';
import { Layout } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import Chat from './pages/Chats';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const { Sider } = Layout;
// const socket = io.connect('http://localhost:4000'); //  our server will run on port 4000, so we connect to it from here

function App() {
  const [username, setUsername] = useState(''); 
  const [room, setRoom] = useState(''); 

  return (
    <Layout>
      <Sider width={300} className="sidebar">
        <Logo />
        <MenuList />
      </Sider>
      {/* <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Chat
                username={username} 
                setUsername={setUsername} 
                room={room} 
                setRoom={setRoom} 
                socket={socket} 
              />
            }
          />
        </Routes>
      </div>
      </Router> */}
    </Layout>
  );
}

export default App;
