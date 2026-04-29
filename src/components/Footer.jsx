import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h3>JOIN THE MILANA CLUB</h3>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>SHOP</h4>
            <ul>
              <li><Link to="/women">Women</Link></li>
              <li><Link to="/men">Men</Link></li>
              <li><Link to="/kids">Kids</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><Link to="/new">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>COLLECTIONS</h4>
            <ul>
              <li><Link to="/women/dresses">Summer Dresses</Link></li>
              <li><Link to="/men/jeans">Denim Fit</Link></li>
              <li><Link to="/kids/outerwear">Kids Outerwear</Link></li>
              <li><Link to="/men/shoes">Premium Shoes</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/shipping">Shipping & Returns</Link></li>
              <li><Link to="/tracking">Order Tracking</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>ABOUT MILANA</h4>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/stores">Store Locator</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" /><path d="M3 12c0-4.418 0-6.627 1.318-7.945C5.636 2.736 7.845 2.736 12.264 2.736h-.528c4.418 0 6.627 0 7.945 1.319C21.264 5.373 21.264 7.582 21.264 12c0 4.418 0 6.627-1.319 7.945C18.627 21.264 16.418 21.264 12 21.264c-4.418 0-6.627 0-7.945-1.319C2.736 18.627 2.736 16.418 2.736 12z" /><path d="M17.5 6.51l.01-.011" /></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
          </a>
          <a href="#" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.66 7.9 6.44 9.35-.09-.79-.17-2 .04-2.88.2-.84 1.28-5.4 1.28-5.4s-.33-.65-.33-1.62c0-1.52.88-2.65 1.98-2.65.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.9 3.64-.26 1.09.55 1.98 1.63 1.98 1.96 0 3.46-2.07 3.46-5.05 0-2.63-1.89-4.47-4.59-4.47-3.14 0-4.99 2.35-4.99 4.79 0 .95.37 1.96.82 2.51.09.11.1.2.07.31-.09.38-.3 1.23-.34 1.4-.05.21-.18.25-.39.15-1.48-.68-2.4-2.82-2.4-4.54 0-3.69 2.68-7.07 7.72-7.07 4.05 0 7.21 2.89 7.21 6.75 0 4.03-2.54 7.27-6.07 7.27-1.18 0-2.3-.61-2.68-1.34l-.73 2.78c-.26.99-.96 2.23-1.43 2.99A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" /></svg>
          </a>
        </div>
        
        <div className="footer-legal">
          <span>&copy; {new Date().getFullYear()} MILANA TEXTILE. All rights reserved.</span>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
