// Navbar.js

import './NavBar.css'; // Import CSS for Navbar styling
import logo from "/src/assets/BeGuiVir.png";
const NavBar = () => {
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
        
        <img src={logo} alt="logo"/>
        <p>beyondguidancevirtual</p>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">About Us</a></li>

      </ul>
    </nav>
  );
};

export default NavBar;
