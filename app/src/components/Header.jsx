import { BrandLogo } from './BrandLogo'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Zorvintech Private Limited home">
        <BrandLogo />
      </a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#industries">Who We Help</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="mailto:info@zorvintech.in">Free Consultation</a>
    </header>
  )
}
