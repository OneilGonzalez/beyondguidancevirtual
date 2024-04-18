// Home.tsx

import React from 'react';
import './Home.css';
import HomeVideo from './components/HomeVideo';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HomeVideo />
      <h2 className="container">.</h2>
    </div>
  );
};

export default Home;
