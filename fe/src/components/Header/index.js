import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header-wrapper">
      <ul className="header-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sessions">Sessions</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
      <div className="header-banner"></div>
    </div>
  )
}


export default Header;
