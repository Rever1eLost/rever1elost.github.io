// Header.js
import React from 'react';
import ResponsiveStyles from './ResponsiveStyles';

function Header() {
  return (
    <header className="header">
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
      <div className="container">
        <div className="logo">
          <img src="https://t4.ftcdn.net/jpg/04/44/44/07/240_F_444440789_aD5Gm4NsRCC3FV7Jkjt8iUn24gT0kCy0.jpg" style={{ width: '100px', height: 'auto' }} alt="Logo" />
        </div>
        <nav className="nav-links">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/teams">TEAMS</a>
          <a href="/news">NEWS</a>
          <a href="/Forum">FORUM</a>
          <a href="/login">LOGIN</a> 
        </nav>
      </div>
    </header>
  );
}

export default Header;

