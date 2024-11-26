import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button className="btn btn-primary" onClick={toggleSidebar} style={{ margin: '10px' }}>
        &#9776; {/* This is the 3-dash icon */}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 vh-100 ${isOpen ? 'd-block' : 'd-none'}`}
        style={{ position: 'fixed', top: 0, left: 0, width: '250px', transition: '0.3s' }}
      >
        <h4>Modules</h4>
        <nav>
          <ul className="list-unstyled">
            <li>
              <Link to="/dashboard" className="text-white" onClick={toggleSidebar}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/product" className="text-white" onClick={toggleSidebar}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/category" className="text-white" onClick={toggleSidebar}>
                Settings
              </Link>
            </li>
            {/* Add more links for other modules */}
          </ul>
        </nav>
      </div>

      {/* Main content, making space for the sidebar */}
      <div
        style={{
          marginLeft: isOpen ? '250px' : '0', // Shifts the content to the right when the sidebar is open
          transition: 'margin-left 0.3s',
        }}
      >
        <h1>Main Content</h1>
        {/* Content here will shift when the sidebar opens */}
      </div>
    </div>
  );
}

export default Sidebar;
