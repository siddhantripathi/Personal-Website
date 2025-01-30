import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
// Import only colored images

import gmailColor from './gmail.jpg';
import githubColor from './github.jpg';
import linkedinColor from './linkedin.jpg';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_q7q6hxs', // You'll get this from EmailJS
      'template_l2doguo', // You'll get this from EmailJS
      form.current,
      'Pif9FmEYxDIOcGZ5s' // You'll get this from EmailJS
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  const socialLinks = [
    {
      name: 'Gmail',
      icon: gmailColor,
      link: 'mailto:siddhant8792@gmail.com?subject=Getting%20in%20touch'
    },
    {
      name: 'GitHub',
      icon: githubColor,
      link: 'https://github.com/siddhantripathi'
    },
    {
      name: 'LinkedIn',
      icon: linkedinColor,
      link: 'https://www.linkedin.com/in/siddhant-tripathi-data-analyst/'
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <div className="status-message success">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="status-message error">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>

      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.link}
            target={social.name === 'Gmail' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <div className="social-icon">
              <img src={social.icon} alt={social.name} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 