import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <ul>
        <button><NavLink to="/Scheduler" >Scheduler</NavLink></button>
        <button><NavLink to="/Chats" >Chats</NavLink></button>
        <button><NavLink to="/Games" >Games</NavLink></button>
        <button><NavLink to="/Players" >Players</NavLink></button>
        <button><NavLink to="/Profile" >Profile</NavLink></button>
      </ul>
    </nav>
  );
}

export default Navigation;