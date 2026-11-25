import React, { useState } from 'react';

// Webhook / Google Apps Script Web App endpoint URL
// Can be configured in .env as VITE_CONTACT_FORM_ENDPOINT or set directly here
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    const submissionData = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (CONTACT_ENDPOINT) {
      try {
        const payload = new FormData();
        Object.entries(submissionData).forEach(([key, val]) => {
          payload.append(key, val);
        });

        await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          body: payload,
          mode: 'no-cors',
        });

        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (err) {
        console.error('Contact form submission error:', err);
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Failed to send message. Please try again or contact us directly at info@sanchari.com.',
        });
      }
    } else {
      // Log submission for verification while endpoint is awaiting configuration
      console.log('Contact form submitted payload:', submissionData);
      setTimeout(() => {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 600);
    }
  };

  const handleReset = () => {
    setStatus({ submitting: false, submitted: false, error: null });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">Let's move forward</div>
          <h2>
            Your next ride is
            <br />
            <span>closer than you think.</span>
          </h2>
          <p>
            Whether you need support, have a partnership idea, or want to join the EV wave—we'd
            love to hear from you.
          </p>
          <div className="contact-details">
            <a href="mailto:info@sanchari.com" data-testid="contact-email">
              info@sanchari.com
            </a>
            <a href="tel:+918985518855" data-testid="contact-phone">
              +91 89855 18855
            </a>
          </div>
        </div>

        {status.submitted ? (
          <div className="contact-form contact-form-success" data-testid="contact-form" style={{ textAlign: 'center', padding: '40px 28px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#dcfce7',
                color: '#16a34a',
                margin: '0 auto 16px',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ margin: '0 0 10px', fontSize: '22px', color: '#0f172a' }}>Thank you!</h3>
            <p style={{ margin: '0 auto 24px', color: '#475569', fontSize: '14px', lineHeight: '1.6', maxWidth: '320px' }}>
              Your message has been received. Our team will get in touch with you shortly.
            </p>
            <button
              type="button"
              className="button button-lime"
              onClick={handleReset}
              style={{ margin: '0 auto' }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" data-testid="contact-form" onSubmit={handleSubmit}>
            <h3>Get in touch</h3>
            <input
              required
              name="name"
              placeholder="Name"
              data-testid="contact-name-input"
              value={formData.name}
              onChange={handleChange}
              disabled={status.submitting}
            />
            <input
              required
              name="email"
              placeholder="Email"
              data-testid="contact-email-input"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status.submitting}
            />
            <input
              required
              name="phone"
              placeholder="Phone"
              data-testid="contact-phone-input"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={status.submitting}
            />
            <textarea
              required
              name="message"
              placeholder="Message"
              rows="4"
              data-testid="contact-message-input"
              value={formData.message}
              onChange={handleChange}
              disabled={status.submitting}
            ></textarea>

            {status.error && (
              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#b91c1c',
                  padding: '10px 14px',
                  borderRadius: '7px',
                  fontSize: '13px',
                }}
              >
                {status.error}
              </div>
            )}

            <button
              className="button button-lime"
              type="submit"
              data-testid="contact-submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? (
                'Sending message...'
              ) : (
                <>
                  Send message{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
