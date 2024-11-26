import React, { useState } from 'react';
import './AdminLogin.css'; // Optional CSS for styling

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (username and password cannot be empty)
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    // Simulate authentication (you can replace this with actual API call)
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      // Redirect to admin dashboard or another page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
