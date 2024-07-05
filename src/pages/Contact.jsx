import React, { useState } from 'react';
import styles from './Contact.module.css';
import Animator from '../components/Animator';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.contentWrapper}>
      <Animator type="scale">
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.sectionTitle}>Send us a message</h2>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
        </Animator>
        <Animator type="scale">
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <div className={styles.contactInfo}>
            <p><strong>Address:</strong> 123 E-commerce St, Web City, Web Browser dist, 12345</p>
            <p><strong>Phone:</strong> (+91) 9876 54 321</p>
            <p><strong>Email:</strong> <a href="mailto:ray@cozymart.com" className={styles.link}>ray@cozymart.com</a></p>
            <p><strong>Hours:</strong> Mon-Fri 9am-5pm, Sat 10am-4pm, Closed Sun</p>
          </div>
          
          <h2 className={styles.sectionTitle}>Find Us</h2>
          <div className={styles.mapPlaceholder}>
            <p>Map</p>
          </div>
        </div>
        </Animator>
      </div>
    </div>
  );
};

export default Contact;
