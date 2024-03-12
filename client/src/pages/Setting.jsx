import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Settings({ onDeleteProfile }) {
  const [profileDeleted, setProfileDeleted] = useState(false);
  const navigate = useNavigate(); 

  const handleDeleteProfile = () => {
    onDeleteProfile();
    setProfileDeleted(true);
  };

  if (profileDeleted) {
    navigate("/"); 
    return null; 
  }

  return (
    <div>
      <h1>Settings</h1>
      <p>This is where you can manage your profile settings.</p>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
  );
}

export default Settings;
