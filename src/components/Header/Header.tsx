import React from 'react';
import './Header.css';

/**
 * Header component.
 */
const Header: React.FC = () => {
  console.log('header');  // todo del
  return (
    <footer className="header">
      <h1 className="header__title">Test APP</h1>
    </footer>
  );
};

export default Header;
