// Home.tsx

import React from 'react';
import './Home.css';
import hero from './assets/hero.webm';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="video-background">
        <video autoPlay loop muted>
        <source src={hero} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <h2 className="top-heading">.</h2>
    </div>
  );
};

export default Home;
