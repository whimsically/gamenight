import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Groups from './pages/Groups.jsx';
import Profile from './pages/Profile.jsx';
import Setting from './pages/Setting.jsx';
import Scheduler from './pages/Scheduler.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Chats from './pages/Chats.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/schedule',
        element: <Scheduler />
      }, {
        path: '/groups',
        element: <Groups />
      }, {
        path: '/profile',
        element: <Profile />
        
      }, {
        path: '/setting',
        element: <Setting />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/chats',
        element: <Chats />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider 
  router={router} />
)
