// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './Home';
import Profile from './Profile';
import Topics from './Topics'; // Adjusted import path
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
