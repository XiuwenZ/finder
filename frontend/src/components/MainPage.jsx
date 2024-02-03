import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './MainPage.css'

const Mainpage = () => {
    const navigate = useNavigate(); // Create a navigate function using useNavigate

    const goToLogin = () => {
      // Programmatically navigate to the login page
      navigate('/login'); // Use navigate to change routes
    };
  
    const goToSignup = () => {
      // Programmatically navigate to the signup page
      navigate('/signup'); // Use navigate to change routes
    };

  return (
    <div className="main-page-container">
      <h1>Welcome to Our Website</h1>
      <p>Join amazing events around your area.</p>
      <div className="btn-group" role="group">
        <button className="btn btn-primary" onClick={goToLogin}>Login</button>
        <button className="btn btn-success" onClick={goToSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Mainpage;
