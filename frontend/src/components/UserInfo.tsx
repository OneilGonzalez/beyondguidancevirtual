// UserInfo.tsx

import React from 'react';
import './UserInfo.css';

interface UserInfoProps {
  name: string;
  email: string;
  bio: string;
  profilePic: string; // Added profilePic prop
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, bio, profilePic }) => {
  return (
    <div className="user-info-card">
      <div className="profile-info">
        <div className="profile-picture">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="name">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="user-info">
        <p>Email: {email}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
  );
}

export default UserInfo;
