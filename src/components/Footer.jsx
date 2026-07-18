import React from 'react'
import { Zap, ArrowUpRight, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
    services: [
      { label: 'AI Chatbots', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'Automation', href: '#services' },
      { label: 'Analytics', href: '#services' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support', href: '#contact' },
    ],
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <div className="footer__logo-icon">
                <Zap size={20} />
              </div>
              <span className="footer__logo-text">AutoNexa<span className="footer__logo-accent">AI</span></span>
            </a>
            <p className="footer__brand-desc">
              Empowering businesses with intelligent AI automation solutions that drive growth, 
              efficiency, and innovation.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__links-col">
              <h4 className="footer__links-title">Company</h4>
              <ul className="footer__links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-col">
              <h4 className="footer__links-title">Services</h4>
              <ul className="footer__links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-col">
              <h4 className="footer__links-title">Resources</h4>
              <ul className="footer__links-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__cta">
          <div className="footer__cta-content">
            <h3 className="footer__cta-title">Ready to Transform Your Business?</h3>
            <p className="footer__cta-desc">Schedule a free consultation and see how AI can automate your workflows.</p>
          </div>
          <a href="#contact" className="btn btn-outline footer__cta-btn">
            Book a Call <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} AutoNexaAI. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
