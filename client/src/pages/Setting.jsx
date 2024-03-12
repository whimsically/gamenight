import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

function Settings({ onDeleteProfile }) {
  const [profileDeleted, setProfileDeleted] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleDeleteProfile = () => {
    // Call onDeleteProfile function to trigger profile deletion
    onDeleteProfile();
    // Set profileDeleted to true to trigger the redirect
    setProfileDeleted(true);
  };

  if (profileDeleted) {
    // Redirect to the homepage if the profile is deleted
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
