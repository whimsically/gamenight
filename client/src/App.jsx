import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Layout } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import Chat from './pages/Chats';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const { Sider, Content } = Layout;

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the socket when the component mounts
    const newSocket = io.connect('http://localhost:4000');
    setSocket(newSocket);

    // Cleanup the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={300} className="sidebar">
        <Logo />
        <MenuList />
      </Sider>
      <Layout>
        <Content>
          <Router>
            <div className='App'>
              <Routes>
                <Route
                  path="/"
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
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;