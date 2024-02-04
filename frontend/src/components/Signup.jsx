import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './Signup.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic here
    console.log("Signup with:", name, email, password);
  };

  return (
    <div className="wrap-container">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Name" 
            required 
          />
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
};

export default Signup;
