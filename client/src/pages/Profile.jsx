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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const profileImageUrl = formData.profileImage ? URL.createObjectURL(formData.profileImage) : null;
    const backgroundImageUrl = formData.backgroundImage ? URL.createObjectURL(formData.backgroundImage) : null;
  
    const updatedUserProfile = {
      ...formData,
      profileImage: profileImageUrl,
      backgroundImage: backgroundImageUrl
    };
  
    setUserProfile(updatedUserProfile);
    setCreatingProfile(true);
  };
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const renderProfile = () => {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Location:</strong> {userProfile.location}</p>
          {/* Add more profile fields as needed */}
          {userProfile.profileImage && (
            <div>
              <strong>Profile Image:</strong>
              <img src={userProfile.profileImage} alt="Profile Image" />
            </div>
          )}
        <div>
          <strong>Background Image:</strong>
          <div style={{ width: '100%', height: '200px' }}> {/* Adjust the height as needed */}
          <img src={userProfile.backgroundImage} alt="Background Image" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>


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
          <label>
            Profile Image:
            <input type="file" name="profileImage" onChange={handleFileChange} />
          </label>
          <label>
            Background Image:
            <input type="file" name="backgroundImage" onChange={handleFileChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return renderProfile();
  }
}

export default Profile;
