// const serviceId = 'service_m5m6c2u';
// const templateId = 'template_w26s26i';
// const userId = 'your_emailjs_user_id';

// ContactForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Importing the correct library

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Set up your Email.js service and template details
    const serviceId = 'service_m5m6c2u';
    const templateId = 'template_w26s26i';
    const userId = 'rGl6rwddR2UJjcaqZ';

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      {submitted ? (
        <p>Your message has been submitted!</p>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email*</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      )}
    </div>
  );
};

export default ContactForm;