import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div className='container'>
          <div className="dashboard-container">
  
  
            {/* Non-movable Header */}
            <header className="dashboard-header">
  
          <button
          className="btn text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
              <h1>Dashboard Header</h1>
              <nav>
                <a href="#home">Home</a>
                <a href="#profile">Profile</a>
                <a href="#settings">Settings</a>
              </nav>
            </header>
      
            {/* Scrollable Content */}
            <main className="dashboard-content">
              <p>Welcome to the dashboard! Scroll down to see the content.</p>
              <div style={{ height: '1500px' }}>
                {/* Add long content to test scrolling */}
                <p>This is a long scrollable content area.</p>
              </div>
            </main>
          </div>
          </div>
    )
}
