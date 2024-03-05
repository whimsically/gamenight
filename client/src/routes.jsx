import { createRef } from 'react'

import Profile  from './pages/Profile.jsx';
import Chats from './pages/Chats.jsx';
import Players from './pages/Players.jsx';
import Games from './pages/Games.jsx';
import Scheduler from './pages/Scheduler.jsx';


export const routes = [
    { path: '/', name: 'Profile', element: <Profile />, nodeRef: createRef() },
    { path: '/Chats', name: 'Chats', element: <Chats />, nodeRef: createRef(), },
    { path: '/Players', name: 'Players', element: <Players />, nodeRef: createRef(), },
    { path: '/Games', name: 'Games', element: <Games />, nodeRef: createRef(), },
    { path: '/Scheduler', name: 'Scheduler', element: <Scheduler />, nodeRef: createRef(), },
  ]