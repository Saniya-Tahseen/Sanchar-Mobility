import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">Let's move forward</div>
              <h2>Your next ride is<br /><span>closer than you think.</span>
              </h2>
              <p>Whether you need support, have a partnership idea, or want to join the EV wave—we'd
                love to hear from you.</p>
              <div className="contact-details"><a href="mailto:info@sancharsathi.com" data-testid="contact-email">info@sancharsathi.com</a><a href="tel:+91" data-testid="contact-phone">+91 89770 09804</a></div>
            </div>
            <form className="contact-form" data-testid="contact-form">
              <h3>Get in touch</h3><input required="" placeholder="Name"
                data-testid="contact-name-input" value="" /><input required=""
                placeholder="Email" data-testid="contact-email-input" type="email" value="" /><input required="" placeholder="Phone" data-testid="contact-phone-input" value="" /><textarea required="" placeholder="Message" rows="4"
                data-testid="contact-message-input"></textarea><button
                className="button button-lime" type="submit" data-testid="contact-submit-button">Send message <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg></button>
            </form>
          </div>
        </section>
  );
}
