import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="link">Add Customer</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="link">Orders</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="link">Profile</Link>
        </li>
      </ul>
      <div className="profile-section">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder image
          alt="User Avatar"
          className="profile-image"
        />
      </div>
    </nav>
  );
};
export default NavBar;
