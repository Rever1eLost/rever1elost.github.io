// Header.js
import React from 'react';
import ResponsiveStyles from './ResponsiveStyles';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="header">
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
      <div className="container">
        <div className="logo">
          <img src="https://t4.ftcdn.net/jpg/04/44/44/07/240_F_444440789_aD5Gm4NsRCC3FV7Jkjt8iUn24gT0kCy0.jpg" style={{ width: '100px', height: 'auto' }} alt="Logo" />
        </div>
        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/teams">TEAMS</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/Forum">FORUM</Link>
          <Link to="/login">LOGIN</Link> 
        </nav>
      </div>
    </header>
  );
}

export default Header;

