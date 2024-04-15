import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import NavBar from './components/NavBar';
import Home from './Home';
import Topics from './Topics';
import Profile from './Profile';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <div>
        <NavBar />
        <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
