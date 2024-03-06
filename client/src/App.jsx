import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
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
  const [darkTheme, setDarkTheme] = useState (true);
  const [collapsed, setCollapsed] = useState (false);


  useEffect(() => {
    // Connect to the socket when the component mounts
    const newSocket = io.connect('http://localhost:4000');
    setSocket(newSocket);

    // Cleanup the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed}
      collapsible
      trigger={null}
      theme={darkTheme? 'dark' : 'light'} 
      width={400} 
      className="sidebar"
      >
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme} 
        toggleTheme={toggleTheme} />
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