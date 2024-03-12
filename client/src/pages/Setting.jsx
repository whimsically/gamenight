import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

function Settings({ onDeleteProfile }) {
  const [profileDeleted, setProfileDeleted] = useState(false);

  const handleDeleteProfile = () => {
    onDeleteProfile();
    setProfileDeleted(true);
  };

  if (profileDeleted) {
    return redirect("/");
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
