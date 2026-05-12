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
        <a href="#industries">Industries</a>
      </nav>
      <a className="header-cta" href="tel:+919666910109">Call Us</a>
    </header>
  )
}
