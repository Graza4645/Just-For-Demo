import React from 'react'
import { ArrowRight, Sparkles, Bot, TrendingUp } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__bg-orb hero__bg-orb--1"></div>
        <div className="hero__bg-orb hero__bg-orb--2"></div>
        <div className="hero__bg-orb hero__bg-orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            AI-Powered Automation
          </div>

          <h1 className="hero__title">
            Automate Your Business with{' '}
            <span className="hero__title-gradient">Intelligent AI</span>
          </h1>

          <p className="hero__description">
            We build cutting-edge AI automation systems that streamline operations, 
            boost productivity, and drive growth. Transform your workflows with 
            next-generation artificial intelligence solutions.
          </p>

          <div className="hero__buttons">
            <a href="#contact" className="btn btn-primary">
              Start Automating <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary">
              <Sparkles size={18} /> Explore Solutions
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-number">500+</div>
              <div className="hero__stat-label">Projects Delivered</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">98%</div>
              <div className="hero__stat-label">Client Satisfaction</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">10x</div>
              <div className="hero__stat-label">Efficiency Boost</div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-card">
            <div className="hero__visual-header">
              <div className="hero__visual-dot hero__visual-dot--red"></div>
              <div className="hero__visual-dot hero__visual-dot--yellow"></div>
              <div className="hero__visual-dot hero__visual-dot--green"></div>
            </div>
            <div className="hero__visual-code">
              <span className="hero__visual-line">
                <span className="hero__visual-keyword">const</span> ai = <span className="hero__visual-function">AutoNexaAI</span>();
              </span>
              <span className="hero__visual-line">
                <span className="hero__visual-keyword">await</span> ai.<span className="hero__visual-function">automate</span>({'{'}
              </span>
              <span className="hero__visual-line">
                &nbsp;&nbsp;workflow: <span className="hero__visual-string">"business"</span>,
              </span>
              <span className="hero__visual-line">
                &nbsp;&nbsp;intelligence: <span className="hero__visual-string">"adaptive"</span>,
              </span>
              <span className="hero__visual-line">
                &nbsp;&nbsp;scale: <span className="hero__visual-string">"unlimited"</span>
              </span>
              <span className="hero__visual-line">{'}'});</span>
              <span className="hero__visual-line" style={{ color: '#22c55e', marginTop: '8px' }}>
                ✓ Automation deployed successfully
              </span>
            </div>

            <div className="hero__visual-float hero__visual-float--1">
              <Bot size={16} /> AI Active
            </div>
            <div className="hero__visual-float hero__visual-float--2">
              <TrendingUp size={16} /> +340% ROI
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
