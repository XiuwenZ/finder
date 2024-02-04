// login.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import AuthContext from './AuthContext.jsx';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext); // Use the setAuthData function from AuthContext

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Handling login...');
  
    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        console.log('Login successful!');
        const { token } = await response.json();
        localStorage.setItem('token', token);
        setAuthData(token); // Update the authentication state
        navigate('/dashboard');
      } else {
        console.log('Login failed. Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
    

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <Link to="/signup">Need an account? Sign up</Link>
    </div>
  );
};

export default Login;
