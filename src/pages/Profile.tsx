// Profile.tsx

import React from 'react';
import UserInfo from '../components/UserInfo';
const Profile: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };
    return (
<div>
      <div className="container" > 
        <UserInfo name={user.name} email={user.email} bio={user.bio} />
      </div>
    </div>
    );
}

export default Profile;