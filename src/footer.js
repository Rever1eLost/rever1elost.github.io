// Footer.js
import React from 'react';
import ResponsiveStyles from './ResponsiveStyles';

function Footer() {
  return (
    <footer>
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
      <div className="footer-container">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><Link to="" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
            <li><Link to="" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
            <li><Link to="" target="_blank" rel="noopener noreferrer">YouTube</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Esports Community. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
