import heroDashboard from '../assets/zorvintech-dashboard-hero.png'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <BrandLogo variant="mark" className="hero-logo-mark" />
        <p className="eyebrow">Trusted Accessibility Solutions</p>
        <h1>Accessible technology solutions for modern organizations.</h1>
        <p className="hero-copy">
          At ZorvinTech, we provide technology, accessibility, and IT solutions for businesses and organizations.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:info@zorvintech.in">
            Free Consultation <Icon name="arrow" />
          </a>
          <a className="button secondary" href="#services">View Services</a>
        </div>
        <p className="hero-trust">
          Supporting businesses, educational institutions, and government organizations with accessible and compliant digital solutions.
        </p>
      </div>
      <div className="dashboard-visual" aria-label="Technology dashboard illustration">
        <img src={heroDashboard} alt="AI cloud and automation dashboard visualization" />
        <div className="metric-row floating-metrics">
          <div>
            <strong>WCAG</strong>
            <span>Accessibility Guidance</span>
          </div>
          <div>
            <strong>PDF/UA</strong>
            <span>Document Compliance</span>
          </div>
        </div>
        <div className="workflow-card floating-workflow">
          <span>Audit</span>
          <i></i>
          <span>Build</span>
          <i></i>
          <span>Validate</span>
        </div>
      </div>
    </section>
  )
}
