import { useEffect, useState } from 'react'
import { industries, processSteps, progressItems, services, stats, values } from '../data/siteContent'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'

export function AboutSection() {
  return (
    <section className="section split" id="about">
      <div>
        <p className="eyebrow">About Zorvintech</p>
        <h2>Enterprise-grade delivery with startup speed.</h2>
        <p>
          Zorvintech Private Limited is a Visakhapatnam-based technology and business solutions company helping organizations modernize software, automate operations, build offshore capability, and scale digital execution.
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

export function VisionMissionSection() {
  return (
    <section className="section vision-mission">
      <article>
        <p className="eyebrow">Vision</p>
        <h2>To become a trusted global technology and business solutions provider.</h2>
        <p>
          We deliver innovative, reliable, and customer-centric services that help businesses move with confidence.
        </p>
      </article>
      <article>
        <p className="eyebrow">Mission</p>
        <h2>To empower businesses through technology, innovation, and operational excellence.</h2>
        <p>
          We build long-term relationships with clients worldwide while supporting measurable growth and dependable execution.
        </p>
      </article>
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
        <h2>Full-spectrum technology and business solutions.</h2>
        <p>Plan, build, operate, support, and scale with one accountable partner.</p>
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
        <p className="eyebrow">Industries</p>
        <h2>Built for teams that need dependable execution.</h2>
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
        <p className="eyebrow">Why Choose Us</p>
        <h2>Practical delivery, measurable progress, durable systems.</h2>
        <p>
          We combine experienced teams, scalable solution design, affordable engagement models, timely delivery, end-to-end support, and a customer-centric operating rhythm.
        </p>
      </div>
      <div className="trust-panel">
        {progressItems.map(([label, value]) => (
          <div className="progress-item" key={label}>
            <span>{label}</span>
            <div><i style={{ width: value }}></i></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="section-heading">
        <p className="eyebrow">Workflow</p>
        <h2>A clear delivery process from idea to support.</h2>
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
    </section>
  )
}
