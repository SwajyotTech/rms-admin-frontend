import React,{ useState } from 'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar/sidebar'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
      <div>
        <div className="dashboard-container">


          {/* Non-movable Header */}
          <header className="dashboard-header">
          {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <button
            className="btn text-white"
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-expanded={isSidebarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> {/* 3-dash icon */}
          </button>

            <h1 >Dashboard Header</h1>
            <nav>
              <a href="#home">Home</a>
              <a href="#profile">Profile</a>
              <a href="#settings">Settings</a>
            </nav>
          </header>
    
         
          {/* <main className="dashboard-content">
            <p>Welcome to the dashboard! Scroll down to see the content.</p>
            <div style={{ height: '1500px' }}>
             
              <p>This is a long scrollable content area.</p>
            </div>
          </main> */}
        </div>
        </div>
  )
}
