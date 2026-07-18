import React from 'react'
import { CheckCircle2, ArrowRight, Layers, Target, Clock, Users } from 'lucide-react'
import './Solutions.css'

const Solutions = () => {
  const solutions = [
    {
      icon: <Target size={24} />,
      title: 'Lead Generation Engine',
      description: 'Never miss another lead. Our AI captures, qualifies, and routes leads from every channel automatically.',
      benefits: ['24/7 Lead Capture', 'Auto-qualification', 'CRM Integration', 'Smart Routing'],
    },
    {
      icon: <Clock size={24} />,
      title: 'Operations Autopilot',
      description: 'Put repetitive tasks on autopilot. From invoicing to scheduling, automate the workflows that eat up your time.',
      benefits: ['Process Automation', 'Smart Scheduling', 'Auto Invoicing', 'Task Management'],
    },
    {
      icon: <Users size={24} />,
      title: 'Customer Experience AI',
      description: 'Deliver personalized experiences at scale. AI-powered support that feels human and resolves issues instantly.',
      benefits: ['Instant Responses', 'Personalization', 'Multi-channel', 'Sentiment Analysis'],
    },
  ]

  return (
    <section className="solutions section" id="solutions">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Layers size={14} /> Solutions
          </span>
          <h2 className="section-title">Built for Your Industry</h2>
          <p className="section-subtitle">
            Tailored AI solutions designed to solve the unique challenges your business faces every day.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((solution, index) => (
            <div className="solutions__card" key={index}>
              <div className="solutions__card-header">
                <div className="solutions__card-icon">{solution.icon}</div>
                <h3 className="solutions__card-title">{solution.title}</h3>
              </div>
              <p className="solutions__card-desc">{solution.description}</p>
              <ul className="solutions__card-benefits">
                {solution.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="solutions__card-benefit">
                    <CheckCircle2 size={16} className="solutions__card-check" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="solutions__card-cta">
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
