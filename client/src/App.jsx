import { useState, useEffect } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import './index.css';

import { Outlet } from 'react-router-dom';


const { Header, Sider, Content } = Layout;


function App() {

  const [darkTheme, setDarkTheme] = useState (true);
  const [collapsed, setCollapsed] = useState (false);

  const {
    token: {colorBgContainer, borderRadiusLG},
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
      <Button
          type="text"
          className='toggle'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          />
        {/* <Logo />  */}
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme} 
        toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer}}>
          Game Night
        </Header>
        <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;