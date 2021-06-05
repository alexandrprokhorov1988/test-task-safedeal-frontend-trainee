import React from 'react';
import style from './Header.module.css';

/**
 * Header component.
 */
const Header: React.FC = () => {
  console.log('header');  // todo del
  return (
    <footer className={style.header}>
      <h1 className={style.title}>Test APP</h1>
    </footer>
  );
};

export default Header;
