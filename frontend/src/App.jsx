// App.jsx

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RegisteredEvent from './components/RegisteredEvent';
import MoreEvents from './components/MoreEvents';
import EventDetail from './components/EventDetail';
import AuthContext from './components/AuthContext'; // import AuthContext

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('');

  function onLogin(username) {
    setUsername(username);
    setIsLoggedIn(true);
  }

  function onLogout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}> {/* use AuthContext.Provider */}
      <div className="app">
        {isLoggedIn ? (
          <>
            <Navbar username={username} onLogout={onLogout} />
            <Header />
            <RegisteredEvent />
            <MoreEvents />
            <Footer />
          </>
        ) : (
          <>
            <MainPage />
          </>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;