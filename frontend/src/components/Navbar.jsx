const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html">
          <h3>EventHunter</h3>
        </a>
        <ul className="nav__menu">
          <li>
            <a href="index.html">Schedule</a>
          </li>
          <li>
            <a href="courses.html">Profile</a>
          </li>
          <li>
            <a href="contact.html">Logout</a>
          </li>
        </ul>
        <button id="open-menu-btn">
          <i className="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn">
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

