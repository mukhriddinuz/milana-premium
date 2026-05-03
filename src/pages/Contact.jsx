import { useEffect, useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email && !formData.phone) {
      alert('Iltimos, aloqa uchun Email yoki Telefon raqamingizdan birini kiriting.');
      return;
    }
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Whether you have a question about our collections, factory processes, or wholesale inquiries, our team is ready to answer all your questions.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="info-block">
            <h3>Headquarters & Factory</h3>
            <p>123 Fashion Avenue, Industrial District<br />Tashkent, Uzbekistan 100000</p>
          </div>
          
          <div className="info-block">
            <h3>Contact Details</h3>
            <p>
              <strong>Email:</strong> info@milana-textile.uz<br />
              <strong>Phone:</strong> +998 90 123 45 67<br />
              <strong>Wholesale:</strong> b2b@milana-textile.uz
            </p>
          </div>
          
          <div className="info-block">
            <h3>Business Hours</h3>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM (UZT)<br />
              Saturday: 10:00 AM - 4:00 PM (UZT)<br />
              Sunday: Closed
            </p>
          </div>
          
          <div className="info-socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Telegram">Telegram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com (Optional)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 90 123 45 67 (Optional)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="wholesale">Wholesale / B2B</option>
                <option value="support">Customer Support</option>
                <option value="press">Press & Media</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="contact-map-placeholder">
        <img 
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1440" 
          alt="Milana Headquarters location" 
          loading="lazy" 
        />
        <div className="map-overlay">
          <h3>Visit Our Factory</h3>
          <p>Experience the quality firsthand</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
