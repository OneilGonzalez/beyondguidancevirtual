// HomeVideo.tsx

import React from 'react';
import './HomeVideo.css';
import hero from '../assets/hero.webm';

const HomeVideo: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={hero} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default HomeVideo;
