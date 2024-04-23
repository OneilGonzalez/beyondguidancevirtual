// UserInfo.tsx

import React from 'react';
import './UserInfo.css'

interface UserInfoProps {
  name: string;
  email: string;
  bio: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, bio }) => {
  return (
    <div className="user-info-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserInfo;
