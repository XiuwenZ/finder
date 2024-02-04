// Footer.jsx
import ContactForm from './ContactForm'; // make sure to import the ContactForm component

const Footer = () => {
    return (
      <footer>
        <div className="container footer__container">
          <div className="footer__1">
            <a href="index.html" className="footer__logo">
              <h4>Event Hunter</h4>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ipsum nobis ratione.
            </p>
          </div>
  
          <div className="footer__2">
            <h4>Permalinks</h4>
            <ul className="permalinks">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
  
          <div className="footer__3">
            <h4>Privacy</h4>
            <ul className="privacy">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
  
          <div className="footer__4">
            <h4>Contact Us</h4>
            {/* Include the ContactForm component here */}
            <ContactForm />
          </div>
        </div>
        <div className="footer__copyright">
          <small>Copyright &copy; Event Hunter</small>
        </div>
      </footer>
    );
  };
  
export default Footer;