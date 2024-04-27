// Home.tsx

import React from 'react';
import HomeVideo from '../components/HomeVideo';
import AboutUs from '../components/AboutUs';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HomeVideo />
      
      <h2 className="container"></h2>
      <AboutUs />{/*<AboutUs />*/}
      
    </div>
  );
};
export default Home;
