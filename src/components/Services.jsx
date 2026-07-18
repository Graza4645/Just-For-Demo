import React from 'react'
import { Bot, Globe, BarChart3, MessageSquare, Zap, Database, ArrowUpRight } from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <Bot size={28} />,
      title: 'AI Chatbots & Voice Agents',
      description: 'Intelligent conversational AI that handles customer support, appointment booking, and lead qualification 24/7.',
      tags: ['NLP', 'Voice AI', 'Multi-Language'],
    },
    {
      icon: <Globe size={28} />,
      title: 'Web Development & Design',
      description: 'Modern, responsive websites with integrated AI features that convert visitors into customers automatically.',
      tags: ['React', 'Next.js', 'UI/UX'],
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Automated Analytics',
      description: 'Real-time dashboards and automated reporting that pull data from all your platforms into actionable insights.',
      tags: ['Reports', 'KPIs', 'Real-time'],
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'WhatsApp & Social Automation',
      description: 'Automated responses on WhatsApp, Instagram, and social platforms that engage leads instantly.',
      tags: ['WhatsApp', 'Instagram', 'Social'],
    },
    {
      icon: <Zap size={28} />,
      title: 'Workflow Automation',
      description: 'End-to-end business process automation that eliminates manual tasks and reduces errors by 95%.',
      tags: ['Zapier', 'Make', 'Custom APIs'],
    },
    {
      icon: <Database size={28} />,
      title: 'CRM & Data Integration',
      description: 'Seamless integration between your CRM, marketing tools, and operations for a unified data ecosystem.',
      tags: ['Salesforce', 'HubSpot', 'Custom'],
    },
  ]

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Zap size={14} /> Our Services
          </span>
          <h2 className="section-title">AI Solutions That Scale</h2>
          <p className="section-subtitle">
            From intelligent chatbots to complete workflow automation, we build the AI infrastructure 
            your business needs to thrive in the digital age.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <div className="services__card-tags">
                {service.tags.map((tag, tagIndex) => (
                  <span className="services__card-tag" key={tagIndex}>{tag}</span>
                ))}
              </div>
              <a href="#contact" className="services__card-link">
                Learn More <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
