import React,{ useState } from 'react'

import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    // API call simulation
    const loginData = {
      email,
      password,
    };

    // Example: Replace with actual API call
    console.log('Login submitted:', loginData);

    // Reset form or handle error
    setErrorMessage('');
    alert('Login successful!');

    navigate('/dashboard'); // Redirect to the Dashboard page
  };

    return (
        <div style={styles.container}>
          <div style={styles.formContainer}>
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p style={styles.error}>{errorMessage}</p>}
    
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>
    
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  placeholder="Enter your password"
                />
              </div>
    
              <button type="submit" style={styles.button}>
                Login
              </button>
            </form>
          </div>
        </div>
      );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

