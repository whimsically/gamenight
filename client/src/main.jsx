import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Chats from './pages/Chats.jsx';
import Games from './pages/Games.jsx';
import Players from './pages/Players.jsx';
import Profile from './pages/Profile.jsx';
import Setting from './pages/Setting.jsx';
import Scheduler from './pages/Scheduler.jsx';


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
        path: '/players',
        element: <Players />
      }, {
        path: '/chats',
        element: <Chats />
      }, {
        path: '/profile',
        element: <Profile />
        
      }, {
        path: '/setting',
        element: <Setting />
      }, {
        path: '/games',
        element: <Games />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider 
  router={router} />
)
