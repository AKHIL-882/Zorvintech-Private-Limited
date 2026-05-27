import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#home">
          <BrandLogo />
        </a>
        <p>Technology, accessibility, and IT solutions for businesses and organizations.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <a href="#about">What We Do</a>
        <a href="#services">Services</a>
        <a href="#industries">Who We Help</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h3>Services</h3>
        <a href="#services">App Development</a>
        <a href="#services">Website Development</a>
        <a href="#services">IT Solutions</a>
        <a href="#services">Accessibility Services</a>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <strong>Office Address</strong>
        <p>47-11-1/8, 1st Floor, Eswar Arcade,<br />1st Line, Dwaraka Nagar,<br />Visakhapatnam - 530016</p>
        <strong>Phone</strong>
        <a href="tel:+919666910109">+91 9666910109</a>
        <strong>Email</strong>
        <a href="mailto:info@zorvintech.in">info@zorvintech.in</a>
        <strong>Website</strong>
        <a href="https://www.zorvintech.in">www.zorvintech.in</a>
      </div>
      <p className="copyright">Copyright 2026 Zorvintech Private Limited.</p>
    </footer>
  )
}
