import heroDashboard from '../assets/zorvintech-dashboard-hero.png'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <BrandLogo variant="mark" className="hero-logo-mark" />
        <p className="eyebrow">Technology, outsourcing, and digital growth partner</p>
        <h1>Transforming Businesses Through Technology</h1>
        <p className="hero-copy">
          Innovative IT solutions, software development, digital transformation, and business support services tailored for modern businesses.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:zorvintech@gmail.com">
            Get Started <Icon name="arrow" />
          </a>
          <a className="button secondary" href="mailto:zorvintech@gmail.com">Book Consultation</a>
        </div>
      </div>
      <div className="dashboard-visual" aria-label="Technology dashboard illustration">
        <img src={heroDashboard} alt="AI cloud and automation dashboard visualization" />
        <div className="metric-row floating-metrics">
          <div>
            <strong>98%</strong>
            <span>Delivery SLA</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Support</span>
          </div>
        </div>
        <div className="workflow-card floating-workflow">
          <span>AI</span>
          <i></i>
          <span>Cloud</span>
          <i></i>
          <span>Automation</span>
        </div>
      </div>
    </section>
  )
}
