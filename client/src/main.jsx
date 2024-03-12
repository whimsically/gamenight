import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import Players from './pages/Players.jsx';
import Profile from './pages/Profile.jsx';
import Setting from './pages/Setting.jsx';
import Scheduler from './pages/Scheduler.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';


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
        path: '/profile',
        element: <Profile />
        
      }, {
        path: '/setting',
        element: <Setting />
      }, {
        path: '/games',
        element: <Games />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider 
  router={router} />
)
