import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import './index.css';
import { Outlet } from 'react-router-dom';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';


const { Header, Sider, Content } = Layout;
const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:3001/graphql',
}));


const httpLink = createHttpLink({
  uri: '/graphql',
  options: {
    reconnect: true
  }
});

// The split function takes three parameters:
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (

      definition.kind === 'OperationDefinition' &&

      definition.operation === 'subscription'
    );

  },
  wsLink,
  httpLink,
);

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});


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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;