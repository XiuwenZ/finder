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
                <h4>THICC MEMES INC</h4>
                <ul className="list-unstyled">
                  <li>342-420-6969</li>
                  <li>Moscow, Russia</li>
                  <li>123 Street South North</li>
                </ul>
              </div>
              {/* Column2 */}
              <div className="col-3">
                <h4>Stuff</h4>
                <ul className="list-unstyled">
                  <li>DANK MEMES</li>
                  <li>OTHER STUFF</li>
                  <li>GUD STUFF</li>
                </ul>
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
