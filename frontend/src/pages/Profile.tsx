// Profile.tsx

import React from 'react';
import UserInfo from '../components/UserInfo';
import profilePic from '../assets/jakwes_barong.jpg';

const Profile: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
    return (
<div>
      <div className="container">
        <UserInfo
          name={user.name}
          email={user.email}
          bio={user.bio}
          profilePic={profilePic} // Passing profile picture as prop
        />
      </div>
    </div>
    );
}

export default Profile;