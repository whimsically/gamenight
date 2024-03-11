 import MenuList from '../components/MenuList.jsx';

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Scheduler from './Scheduler';

function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    // Fetch user profile data and calendar availability
    fetchUserProfile();
    fetchCalendarAvailability();
  }, []);

  const fetchUserProfile = async () => {
    try {
      // Fetch user profile data here
      const profileData = await getUserProfile(); 
      setUserProfile(profileData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchCalendarAvailability = async () => {
    try {
      // Fetch calendar availability data here
      const availabilityData = await getCalendarAvailability(); 
      setAvailability(availabilityData);
    } catch (error) {
      console.error('Error fetching calendar availability:', error);
    }
  };

  return (
    <>
      <h1>Home Page</h1>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      {userProfile && <Profile userProfile={userProfile} />}
      {availability && <Scheduler availability={availability} />}
    </>
  );
}

export default Home;
