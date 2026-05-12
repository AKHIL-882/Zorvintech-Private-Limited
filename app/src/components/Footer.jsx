import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#home">
          <BrandLogo />
        </a>
        <p>IT services, software development, BPO, ITES, and offshore staffing solutions from Visakhapatnam, India.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
      </div>
      <div>
        <h3>Services</h3>
        <a href="#services">Software Development</a>
        <a href="#services">Digital Transformation</a>
        <a href="#services">Offshore Staffing</a>
        <a href="#services">Business Support</a>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <strong>Office Address</strong>
        <p>47-11-1/8, 1st Floor, Eswar Arcade,<br />1st Line, Dwaraka Nagar,<br />Visakhapatnam - 530016</p>
        <strong>Phone</strong>
        <a href="tel:+919666910109">+91 9666910109</a>
        <strong>Email</strong>
        <a href="mailto:zorvintech@gmail.com">zorvintech@gmail.com</a>
        <strong>Business Hours</strong>
        <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
      </div>
      <p className="copyright">Copyright 2026 Zorvintech Private Limited.</p>
    </footer>
  )
}
