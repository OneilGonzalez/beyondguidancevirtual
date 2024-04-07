// Navbar.js

import './NavBar.css'; // Import CSS for Navbar styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Logo</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
