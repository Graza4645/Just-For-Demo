import React from 'react'
import { Brain, Cpu, Shield, Rocket, Workflow } from 'lucide-react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <Brain size={20} />,
      title: 'Advanced Machine Learning',
      description: 'Custom ML models trained on your business data for precise automation.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant infrastructure with end-to-end encryption.',
    },
    {
      icon: <Rocket size={20} />,
      title: 'Rapid Deployment',
      description: 'Go live in weeks, not months. Agile implementation methodology.',
    },
    {
      icon: <Workflow size={20} />,
      title: 'Seamless Integration',
      description: 'Connect with 200+ tools and platforms your team already uses.',
    },
  ]

  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__image">
          <div className="about__image-main">
            <div className="about__image-icon">
              <Cpu size={40} />
            </div>
            <div className="about__image-text">Intelligent Automation</div>
            <div className="about__image-subtext">Powered by Next-Gen AI</div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-badge">About AutoNexaAI</span>
          <h2 className="about__title">
            We Build AI Systems That Transform Businesses
          </h2>
          <p className="about__description">
            AutoNexaAI is a leading AI automation agency specializing in building intelligent 
            systems that automate complex business workflows. We combine cutting-edge artificial 
            intelligence with deep industry expertise to deliver solutions that drive measurable results.
          </p>

          <div className="about__features">
            {features.map((feature, index) => (
              <div className="about__feature" key={index}>
                <div className="about__feature-icon">{feature.icon}</div>
                <div className="about__feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">
            Learn More <Rocket size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
