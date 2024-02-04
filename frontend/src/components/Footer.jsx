
// Footer.jsx
import React from "react";
import "./Footer.css";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Footer = () => {
    return (
        <div className="main-footer">

            
          <div className="container">
            <div className="row">
              {/* Column1 */}
              <div className="col-3">
                 <a href="index.html" className="footer__logo">
                <h4>Event Finders</h4>
                <ul className="list-unstyled">
                  <li>342-420-6969</li>
                  <li>New York, USA</li>
                  <li>123 RTC Street</li>
                </ul>
              </div>
              {/* Column2 */}
              <div className="col-3">
 
                      <h4>Contact Us</h4>
                      <div>
                        <p>+01 234 567 8910</p>
                        <p>shakir260@gmail.com</p>
                      </div>

                      <ul className="footer__socials">
                        <li>
                          <a href="#">
                            <i className="uil uil-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-instagram-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-linkedin-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

              </div>

              {/* Column3 */}
              <div className="col">
                <h4>Contact Us</h4>
                {/* Include the ContactForm component here */}
                <ContactForm />
              </div>
            </div>
            <hr />

              <p className="col-sm">
                Finder @2024 | All rights reserved 
              </p>
            </div>

        </div>
      );
    }
    
    export default Footer;
