// pages/Home.tsx


import React from 'react';
import NavBar from './components/NavBar'; // Import the Navbar component
import './index.css';

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;