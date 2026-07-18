import React, { useState } from 'react'
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email Us',
      value: 'hello@autonexaai.com',
      href: 'mailto:hello@autonexaai.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Call Us',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Visit Us',
      value: 'San Francisco, CA',
      href: '#',
    },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <MessageCircle size={14} /> Contact Us
          </span>
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">
            Ready to automate your business? Get in touch and we'll show you how AI can 
            transform your operations in just weeks.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-desc">
              Whether you have a question about our services, pricing, or anything else, 
              our team is ready to answer all your questions.
            </p>

            <div className="contact__info-items">
              {contactInfo.map((item, index) => (
                <a href={item.href} className="contact__info-item" key={index}>
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    <div className="contact__info-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__social">
              <p className="contact__social-label">Follow us</p>
              <div className="contact__social-links">
                <a href="#" className="contact__social-link" aria-label="LinkedIn">in</a>
                <a href="#" className="contact__social-link" aria-label="Twitter">X</a>
                <a href="#" className="contact__social-link" aria-label="Instagram">ig</a>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="contact__form-input"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="contact__form-input"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="company" className="contact__form-label">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="contact__form-textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary contact__form-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
