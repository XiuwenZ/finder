import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RegisteredEvent from './components/RegisteredEvent';
import MoreEvents from './components/MoreEvents';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';

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
          {/* <MainPage /> */}
          12313
        </>
      )}
    </div>
  );
}

export default App;

