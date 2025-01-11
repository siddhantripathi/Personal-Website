import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="form-label">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="form-label">Email</label>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-input"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label className="form-label">Message</label>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 