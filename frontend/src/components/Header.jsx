import header from '../assets/header.svg';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>Find Free Community Events</h1>
          <p>Help People, Learn New things, and Have fun!</p>
          <a href="courses.html" className="btn btn-primary">
            Browsed
          </a>
        </div>

        <div className="header__right">
          <div className="header__right-image">
            <img src={header} alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

