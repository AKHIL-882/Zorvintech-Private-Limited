import { useEffect, useState } from 'react'
import { industries, processSteps, progressItems, services, stats, values } from '../data/siteContent'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'

export function AboutSection() {
  return (
    <section className="section split" id="about">
      <div>
        <p className="eyebrow">What We Do</p>
        <h2>We build accessible, modern, and user-friendly digital solutions.</h2>
        <p>
          At ZorvinTech, we provide technology, accessibility, and IT solutions for businesses and organizations. Our work spans software, mobile apps, websites, IT support, accessibility remediation, compliance support, and quality testing.
        </p>
        <div className="values">
          {values.map((value) => (
            <span key={value}>
              <Icon name="check" /> {value}
            </span>
          ))}
        </div>
      </div>
      <div className="stats-wrap">
        <BrandLogo variant="mark" className="stats-logo" />
        <div className="stats-grid" aria-label="Company statistics">
          {stats.map(([number, label]) => (
            <div className="stat-card" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    if (!selectedService) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedService(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedService])

  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Technology, accessibility, and IT services.</h2>
        <p>We build accessible, modern, and user-friendly digital solutions.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <button className="service-card" key={service.title} type="button" onClick={() => setSelectedService(service)}>
            <Icon name={service.icon} />
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="service-hover-label">
              View details <Icon name="arrow" />
            </span>
          </button>
        ))}
      </div>
      {selectedService && (
        <div className="service-modal" role="presentation" onClick={() => setSelectedService(null)}>
          <aside
            className="service-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-drawer-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="drawer-close" type="button" aria-label="Close service details" onClick={() => setSelectedService(null)}>
              <Icon name="close" />
            </button>
            <Icon name={selectedService.icon} />
            <p className="eyebrow">Service Details</p>
            <h2 id="service-drawer-title">{selectedService.title}</h2>
            <p>{selectedService.intro}</p>
            <ul className="service-detail-list">
              {selectedService.details.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="section band" id="industries">
      <div className="section-heading">
        <p className="eyebrow">Who We Help</p>
        <h2>Reliable and scalable solutions tailored to client needs.</h2>
      </div>
      <div className="industry-grid">
        {industries.map((industry) => (
          <div className="industry-card" key={industry}>
            <Icon name="spark" />
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WhyChooseSection() {
  return (
    <section className="section split">
      <div>
        <p className="eyebrow">Why Choose ZorvinTech</p>
        <h2>Compliance-driven services with practical technology delivery.</h2>
        <p>
          We combine technology and accessibility to deliver reliable digital experiences with affordable pricing, fast project delivery, quality testing, and dependable support.
        </p>
      </div>
      <div className="trust-panel">
        {progressItems.map(([label, value]) => (
          <div className="progress-item" key={label}>
            <span>{label}</span>
            <div><i style={{ width: value, textColor: 'black' }}></i></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="section process-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact Us</p>
        <h2>Start with a consultation or partnership conversation.</h2>
      </div>
      <div className="process-grid">
        {processSteps.map(([step, description], index) => (
          <article className="process-card" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="contact-actions">
        <a className="button primary" href="mailto:info@zorvintech.in">
          Free Consultation <Icon name="arrow" />
        </a>
        <a className="button secondary" href="#services">View Services</a>
      </div>
    </section>
  )
}
