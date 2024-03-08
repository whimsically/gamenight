import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
// import { AuthService } from '../utils/auth';

function Profile() {
  const { userId } = useParams(); 
  const [userProfile, setUserProfile] = useState(null);
  const [creatingProfile, setCreatingProfile] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', location: '', password: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch the user profile data if userId is provided
        if (userId) {
          const profileData = await AuthService.getUserProfile(userId); 
          setUserProfile(profileData);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();

    return () => {
      setUserProfile(null);
    };
  }, [userId]); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    
    setUserProfile(formData);
    setCreatingProfile(true);
  };

  const Profile = () => {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Location:</strong> {userProfile.location}</p>
          {/* Add more profile fields as needed */}
        </div>
      </div>
    );
  };

  if (!userProfile && !creatingProfile) {
    return (
      <div>
        <h1>Profile</h1>
        <button onClick={() => setCreatingProfile(true)}>Create Profile</button>
      </div>
    );
  } else if (!userProfile && creatingProfile) {
    return (
      <div>
        <h1>Create Profile</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return Profile();
  }
}

export default Profile;
