// App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Topics from './pages/Topics'; 
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Nested route for Topics */}
            <Route path="/topics/*" element={<Topics />} />
            {/* Nested routes for Weeks */}
            <Route path="/topics/week1" element={<Week1 />} />   
            <Route path="/topics/week2" element={<Week2 />} /> 
            <Route path="/topics/week3" element={<Week3 />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
