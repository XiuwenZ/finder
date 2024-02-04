import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import eventImage from '../assets/event.jpg';
import logo from '../assets/logo.png';
import EventsList from './EventsList';

const Mainpage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/events'); // Adjust the URL to your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div class="logoGroup">
            <img class="logo" src={logo}/>
            <h1 class="title">Helping Hand</h1>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item">
              About Us
            </a>
          </li>
        </ul>
      </nav>

      <div id="home" className="main-container">
        <div className="text-content">
          <h1>Discover Events for Social Good</h1>
          <p>
            Discover and participate in impactful events for social good. Join
            our community in supporting food drives, educational initiatives,
            and more, as we work together to create positive change in the
            world. Start making a difference today!
          </p>
          <button className="btn-login" onClick={goToLogin}>
            Login
          </button>
          <button className="btn-signup" onClick={goToSignup}>
            Sign Up
          </button>
        </div>
        <div className="image-content">
          <img src={eventImage} alt="Event" />
        </div>
      </div>

      <div className="events-section">
        <h2 class="eventHeader">Upcoming Events Near You!</h2>
        <EventsList events={events} />
      </div>

      <div id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Eventify is your go-to source for events that make a difference. We
          connect you to a wide array of social good events—ranging from local
          food drives and charity runs to educational workshops and
          community-building activities. Our mission is to empower you to take
          action in ways that resonate with your values.
        </p>

        <div className="feature-cards-container">
          <div className="feature-card">
            <h3>Community Impact</h3>
            <p>
              Find events that help build stronger, more resilient communities.
              From neighborhood cleanups to social advocacy events, your
              participation can lead to meaningful change.
            </p>
          </div>
          <div className="feature-card">
            <h3>Educational Initiatives</h3>
            <p>
              Gain insights and learn with others through events that educate
              and inform. Attend lectures, panel discussions, and forums that
              address today's pressing social issues.
            </p>
          </div>
          <div className="feature-card">
            <h3>Volunteer Opportunities</h3>
            <p>
              Get involved with local non-profits and discover volunteer
              opportunities that contribute to the greater good. Make a personal
              impact by lending your time and skills.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </>
  );
};

export default Mainpage;

