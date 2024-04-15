import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS for Navbar styling
import logo from "../assets/basicgearvirtual_nobg.png"; // Adjust the import path for the logo image

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <p>Beyondguidancevirtual</p>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
