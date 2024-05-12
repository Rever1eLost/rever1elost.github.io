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
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/matches">Matches</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer">YouTube</a></li>
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
