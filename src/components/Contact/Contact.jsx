import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrambleText from '../TextAnimations/ScrambleText';
import emailjs from '@emailjs/browser';
import './Contact.css';
import gmailColor    from './gmail.jpg';
import githubColor   from './github.jpg';
import linkedinColor from './linkedin.jpg';

const Contact = () => {
  const form   = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      'service_q7q6hxs',
      'template_l2doguo',
      form.current,
      'Pif9FmEYxDIOcGZ5s'
    ).then(
      () => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      },
      () => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    );
  };

  const socialLinks = [
    { name: 'Gmail',    icon: gmailColor,    link: 'mailto:siddhant8792@gmail.com?subject=Getting%20in%20touch' },
    { name: 'GitHub',   icon: githubColor,   link: 'https://github.com/siddhantripathi' },
    { name: 'LinkedIn', icon: linkedinColor, link: 'https://www.linkedin.com/in/siddhant-tripathi-data-analyst/' },
  ];

  return (
    <section id="contact" className="contact">
      <ScrambleText text="Contact Me" tag="h2" className="section-title" />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text"  name="user_name"  placeholder="Your Name"    required />
          </div>
          <div className="form-group">
            <input type="email" name="user_email" placeholder="Your Email"   required />
          </div>
          <div className="form-group">
            <textarea           name="message"    placeholder="Your Message" required />
          </div>

          <button
            type="submit"
            className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <span className="btn-spinner" />
                Sending…
              </>
            ) : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="status-message success">Message sent successfully!</div>
          )}
          {status === 'error' && (
            <div className="status-message error">Failed to send. Please try again.</div>
          )}
        </form>
      </motion.div>

      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target={social.name === 'Gmail' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="social-icon-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.12, transition: { duration: 0.2 } }}
          >
            <div className="social-icon">
              <img src={social.icon} alt={social.name} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
